import * as React from 'react';
import * as Styled from '../Styles/Home.style';
import GuessLetter from './GuessLetter';
import SelectLetters from './SelectLetters';
import { useSelector, useDispatch } from 'react-redux';
import {
  guess,
  playAgain,
  setGuesses,
  changeSelect,
} from '../Store/Slices/GuessesSlice';
import { RootState } from '../Store/store';
import ImageSection from './ImageSection';
import { useGetMoviesQuery } from '../Store/Api/MoviesApi';
import * as StyledImage from '../Styles/ImageSection.style';

const Home = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useGetMoviesQuery(page.toString());

  const guesses = useSelector((state: RootState) => state.GuessesSlice);
  const dispatch = useDispatch();

  const keyBoardFun = React.useCallback(
    (event: KeyboardEvent) => {
      switch (true) {
        case event.key === 'ArrowLeft':
          dispatch(changeSelect(guesses.selectedCard - 1));
          break;
        case event.key === 'ArrowRight':
          dispatch(changeSelect(guesses.selectedCard + 1));
          break;
        case 'abcdefghijklmnopqrstuvwxyz'.includes(event.key):
          dispatch(
            guess({ index: guesses.selectedCard, letter: event.key.toString() })
          );
          break;
        default:
          break;
      }
    },
    [dispatch, guesses.selectedCard]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', keyBoardFun);
    return () => {
      return document.removeEventListener('keydown', keyBoardFun);
    };
  }, [guesses.selectedCard, keyBoardFun]);

  React.useEffect(() => {
    if (guesses.correct === 20) {
      setPage(prev => prev + 1);
    }
  }, [guesses.correct]);

  React.useEffect(() => {
    const indexMovie =
      guesses.correct === -1 || guesses.correct === 20 ? 0 : guesses.correct;
    const guessLetters: string[] =
      data?.results[indexMovie].name
        .split('')
        .map((letter, index) =>
          index % 5 === 0 ||
          !'abcdefghijklmnopqrstuvwxyz'.includes(letter.toLowerCase())
            ? letter
            : ''
        ) || [];
    dispatch(
      setGuesses({
        guess: guessLetters,
        img:
          data?.results[indexMovie].backdrop_path ||
          data?.results[indexMovie].poster_path,
        correct: indexMovie,
      })
    );
  }, [guesses.correct, data, dispatch]);

  const playAgainHandelClick = () => {
    dispatch(playAgain());
  };

  if (
    isLoading ||
    guesses.correct === -1 ||
    (data && guesses.correct === data.results.length)
  )
    return (
      <Styled.LoaderContainer>
        <Styled.Loader />
      </Styled.LoaderContainer>
    );
  if (isError) return <div> error </div>;
  if (guesses.mistake === 3) {
    return (
      <StyledImage.ImgSection color={'#ff1100'}>
        <StyledImage.LoseTitle>Sorry but you lose ...</StyledImage.LoseTitle>
        <StyledImage.SubmitButton onClick={playAgainHandelClick}>
          Play Again
        </StyledImage.SubmitButton>
      </StyledImage.ImgSection>
    );
  }
  return (
    <Styled.Container>
      <ImageSection
        imageSrc={guesses.img}
        guesses={guesses.guess}
        movieName={data?.results[guesses.correct].name || ''}
        hintMessage={data?.results[guesses.correct].overview || ''}
      />
      <Styled.DisplayLetterSection>
        {guesses.guess.map((letter, index) => (
          <GuessLetter
            key={`${letter}${index}`}
            letter={letter}
            isSelected={guesses.selectedCard === index}
            index={index}
          />
        ))}
      </Styled.DisplayLetterSection>
      {
        <Styled.SelectedSection>
          <SelectLetters
            letters={
              data?.results[guesses.correct].name
                .split('')
                .filter(letter => letter !== ' ') || []
            }
          />
        </Styled.SelectedSection>
      }
    </Styled.Container>
  );
};

export default Home;

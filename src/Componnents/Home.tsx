import * as React from 'react';
import * as Styled from '../Styles/Home.style';
import GuessLetter from './GuessLetter';
import SelectLetters from './SelectLetters';
import { useSelector, useDispatch } from 'react-redux';
import { guess, playAgain, setGuesses } from '../Store/Slices/GuessesSlice';
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
      dispatch(
        guess({ index: guesses.selectedCard, letter: event.key.toString() })
      );
    },
    [guess, dispatch, guesses.selectedCard]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', keyBoardFun);
    return () => {
      return document.removeEventListener('keydown', keyBoardFun);
    };
  }, [guesses.selectedCard, keyBoardFun]);

  React.useEffect(() => {
    const indexMovie = guesses.correct === -1 ? 0 : guesses.correct;
    if (guesses.correct === data?.results.length) {
      setPage(prev => prev + 1);
    } else {
      const guessLetters: string[] =
        data?.results[indexMovie].name
          .split('')
          .map((letter, index) =>
            !index ? letter : letter === ' ' ? ' ' : ''
          ) || [];
      dispatch(
        setGuesses({
          guess: guessLetters,
          img:
            data?.results[indexMovie].backdrop_path ||
            data?.results[indexMovie].poster_path,
          selectedCard: 1,
          mistake: 0,
          correct: indexMovie,
        })
      );
    }
  }, [guesses.correct, data]);

  const playAgainHandelClick = () => {
    dispatch(playAgain());
  };

  if (isLoading || guesses.correct === -1) return <div>lodder</div>;
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
        movieName={data?.results[guesses.correct].name}
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
              data?.results[0].name
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

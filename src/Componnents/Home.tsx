import * as React from 'react';
import * as Styled from '../Styles/Home.style';
import GuessLetter from './GuessLetter';
import SelectLetters from './SelectLetters';
import { useSelector, useDispatch } from 'react-redux';
import { guess, setGuesses } from '../Slices/GuessesSlice';
import { getMoviesData } from '../Service/MoviesService';
import { ServerResponse } from '../Types/serverType';
import { RootState } from '../App/store';
import QuestionMark from '../Assets/QuestionMark';
import ImageSection from './ImageSection';

const Home = () => {
  const [movieData, setMovieData] = React.useState<ServerResponse>();
  const guesses = useSelector((state: RootState) => state.GuessesSlice);
  const dispatch = useDispatch();
  console.log(guesses);
  console.log(movieData);

  const fetchData = async () => {
    try {
      const res = await getMoviesData();
      const guessLetters: string[] = res.results[0].name
        .split('')
        .map(letter => (letter === ' ' ? ' ' : ''));
      dispatch(
        setGuesses({
          guess: guessLetters,
          img: res.results[0].poster_path,
          selectedCard: 0,
          mistake: 0,
          correct: 0,
        })
      );
      setMovieData(res);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    const guessLetters: string[] =
      movieData?.results[guesses.correct].name
        .split('')
        .map(letter => (letter === ' ' ? ' ' : '')) || [];
    dispatch(
      setGuesses({
        guess: guessLetters,
        img: movieData?.results[guesses.correct].poster_path,
        selectedCard: 0,
        mistake: 0,
        correct: guesses.correct,
      })
    );
  }, [guesses.correct]);

  return (
    <Styled.Container>
      <ImageSection
        imageSrc={guesses.img}
        guesses={guesses.guess}
        movieName={movieData?.results[guesses.correct].name}
      />
      <Styled.DisplayLetterSection>
        {guesses.guess.length ? (
          guesses.guess.map((letter, index) => (
            <GuessLetter
              key={`${letter}${index}`}
              letter={letter}
              isSelected={guesses.selectedCard === index}
              index={index}
            />
          ))
        ) : (
          <div> error</div>
        )}
      </Styled.DisplayLetterSection>
      {
        <Styled.SelectedSection>
          <SelectLetters
            selectedCard={guesses.selectedCard}
            letters={
              movieData?.results[0].name
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

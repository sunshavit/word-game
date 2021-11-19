import * as React from 'react';
import { getMoviesData } from '../Service/MoviesService';
import { ContextResponse } from '../Types/ContextType';
import { Guess, GuessLetters } from '../Types/GuessType';
import { ServerResponse } from '../Types/serverType';

export const LettersGuessContext = React.createContext<ContextResponse | null>(
  null
);

export const LettersGuessContextProvider: React.FC = ({ children }) => {
  const [movieData, setMovieData] = React.useState<ServerResponse>();
  const [guesses, setGuesses] = React.useState<Guess>();

  const fetchData = async () => {
    try {
      const res = await getMoviesData();
      const resLetters: GuessLetters[] = res.results[0].name
        .split('')
        .map(letter => ({
          letters: letter,
          isGuess: false,
        }));
      setGuesses({
        guess: resLetters,
        img: res.results[0].backdrop_path,
        selectedCard: 0,
      });
      setMovieData(res);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <LettersGuessContext.Provider value={{ movieData, guesses, setGuesses }}>
      {children}
    </LettersGuessContext.Provider>
  );
};

export default LettersGuessContextProvider;

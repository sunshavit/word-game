import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Guess } from '../../Types/GuessType';
import { ServerResponse } from '../../Types/serverType';
import { MoviesApi } from '../Api/MoviesApi';

interface IndexAndLetter {
  index: number;
  letter: string;
}

interface LettersAndImg {
  img ?: string;
  guess : string[]
}

const initialState: Guess = {
  guess: [],
  img: '',
  selectedCard: 0,
  mistake: 0,
  correct: 0,
  hint :0,
};

export const GuessesSlice = createSlice({
  name: 'guesses',
  initialState,
  reducers: {
    setGuesses: (state: Guess, { payload }: PayloadAction<LettersAndImg>) => ({
      ...state,
      ...payload,
    }),
    correctGuess: (state: Guess) => {
      state.guess = [];
      state.selectedCard = 0;
      state.correct += 1;
    },
    guess: (state: Guess, action: PayloadAction<IndexAndLetter>) => {
      state.guess[action.payload.index] = action.payload.letter;
      state.selectedCard +=
        state.selectedCard !== state.guess.length - 1
          ? state.guess[action.payload.index + 1] === ' '
            ? 2
            : 1
          : 0;
    },
    help: (state: Guess, action: PayloadAction<IndexAndLetter>) => {
      state.guess[action.payload.index] = action.payload.letter;
    },
    changeSelect: (state: Guess, action: PayloadAction<number>) => {
      state.selectedCard = action.payload;
    },
    mistake: (state: Guess) => {
      state.mistake += 1;
    },
    playAgain: (state: Guess) => {
      state.guess = [];
      state.correct = -1;
      state.mistake = 0;
      state.selectedCard = 0;
    },
    addHint: (state: Guess) => {
      state.hint += 1;
     
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(MoviesApi.endpoints.getMovies.matchFulfilled, (state, action:PayloadAction<ServerResponse>) => {
        const guessLetters: string[] = action.payload.results[0].name
        .split('')
        .map(letter => (letter === ' ' ? ' ' : '')); 
        state.guess = guessLetters;
        state.img = action.payload.results[0].backdrop_path || action.payload.results[0].poster_path
      })
    },
});

export const { setGuesses, correctGuess, guess, changeSelect, help, mistake,playAgain ,addHint } =
  GuessesSlice.actions;

export default GuessesSlice.reducer;

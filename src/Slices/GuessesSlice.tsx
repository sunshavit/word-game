import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Guess } from '../Types/GuessType';

interface IndexAndLetter {
  index: number;
  letter: string;
}

const initialState: Guess = {
  guess: [],
  img: '',
  selectedCard: 0,
  mistake: 0,
  correct: 0,
};

export const GuessesSlice = createSlice({
  name: 'guesses',
  initialState,
  reducers: {
    setGuesses: (state: Guess, action: PayloadAction<Guess>) => {
      state.guess = action.payload.guess;
      state.img = action.payload.img;
      state.selectedCard = action.payload.selectedCard;
      state.mistake = action.payload.mistake;
    },
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
    changeSelect: (state: Guess, action: PayloadAction<number>) => {
      state.selectedCard = action.payload;
    },
  },
});

export const { setGuesses, correctGuess, guess, changeSelect } =
  GuessesSlice.actions;

export default GuessesSlice.reducer;

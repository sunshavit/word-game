import React from 'react';
import GuessLetter from '../Componnents/GuessLetter';
import Home from '../Componnents/Home';
import LettersGuessContextProvider from '../Context/LettersGuessContext';

const App = () => (
  <LettersGuessContextProvider>
    <Home />
  </LettersGuessContextProvider>
);

export default App;

import * as React from 'react';
import { LettersGuessContext } from '../Context/LettersGuessContext';
import * as Styled from '../Styles/Home.style';
import { ContextResponse } from '../Types/ContextType';
import GuessLetter from './GuessLetter';
import SelectLetters from './SelectLetters';

const Home = () => {
  const letters = [
    's',
    'l',
    'p',
    's',
    'l',
    'p',
    's',
    'l',
    'p',
    's',
    'l',
    'p',
    's',
    'l',
    'p',
    's',
    'l',
    'p',
  ];
  const { movieData, guesses } = React.useContext(LettersGuessContext) || {};
  console.log(guesses);
  console.log(movieData);
  return (
    <Styled.Container>
      <Styled.ImgSection></Styled.ImgSection>
      <Styled.DisplayLetterSection>
        {letters.map((letter, index) => (
          <GuessLetter
            key={`${letter}${index}`}
            isGuess={true}
            letter={letter}
          />
        ))}
      </Styled.DisplayLetterSection>
      <Styled.SelectedSection>
        <SelectLetters />
      </Styled.SelectedSection>
    </Styled.Container>
  );
};

export default Home;

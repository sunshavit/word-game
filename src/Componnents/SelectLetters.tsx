import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { guess } from '../Slices/GuessesSlice';
import * as Styled from '../Styles/SelectLetters.style';
import SelectLetter from './SelectLetter';

interface SelectLetters {
  letters: string[];
  selectedCard: number;
}
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const SelectLetters = ({ letters, selectedCard }: SelectLetters) => {
  const dispatch = useDispatch();
  const randomCharacter = letters.map(
    () => alphabet[Math.floor(Math.random() * alphabet.length)]
  );

  const mergeArray = useCallback(
    () =>
      [...randomCharacter, ...letters.map(letter => letter.toLowerCase())].sort(
        (a, b) => 0.5 - Math.random()
      ),
    [letters]
  );

  const keyBoardFun = (event: KeyboardEvent) => {
    dispatch(guess({ index: selectedCard, letter: event.key.toString() }));
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keyBoardFun);
    return () => {
      return document.removeEventListener('keydown', keyBoardFun);
    };
  }, [selectedCard]);

  return (
    <Styled.LettersCardContainer>
      {mergeArray().map((letter, index) => (
        <SelectLetter key={`${letter}${index}`} letter={letter} />
      ))}
    </Styled.LettersCardContainer>
  );
};

export default SelectLetters;

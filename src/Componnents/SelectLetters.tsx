import * as React from 'react';
import { shallowEqual } from 'react-redux';
import * as Styled from '../Styles/SelectLetters.style';
import SelectLetter from './SelectLetter';

interface SelectLetters {
  letters: string[];
}
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const SelectLetters = ({ letters }: SelectLetters) => {
  console.log(letters);
  const randomCharacter = letters.map(
    () => alphabet[Math.floor(Math.random() * alphabet.length)]
  );

  const mergeArray = [
    ...randomCharacter,
    ...letters.map(letter => letter.toLowerCase()),
  ].sort((a, b) => 0.5 - Math.random());

  return (
    <Styled.LettersCardContainer>
      {mergeArray.map((letter, index) => (
        <SelectLetter key={`${letter}${index}`} letter={letter} />
      ))}
    </Styled.LettersCardContainer>
  );
};

export default React.memo(SelectLetters, (p, n) =>
  shallowEqual(p.letters, n.letters)
);

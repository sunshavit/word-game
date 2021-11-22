import * as React from 'react';
import { useDispatch } from 'react-redux';
import { changeSelect } from '../Store/Slices/GuessesSlice';
import * as Styled from '../Styles/GuessLetter.style';

interface GuessLetterProps {
  letter: string;
  isSelected: boolean;
  index: number;
}

const GuessLetter = ({ letter, isSelected, index }: GuessLetterProps) => {
  const dispatch = useDispatch();

  const handelClick = () => {
    if (letter !== ' ') dispatch(changeSelect(index));
  };

  return (
    <Styled.LetterContainer>
      <Styled.LetterButton
        isSpace={letter === ' '}
        isSelected={isSelected}
        onClick={handelClick}
      >
        {letter}
      </Styled.LetterButton>
    </Styled.LetterContainer>
  );
};

export default GuessLetter;

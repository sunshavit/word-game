import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../App/store';
import { changeSelect } from '../Slices/GuessesSlice';
import * as Styled from '../Styles/GuessLetter.style';

interface GuessLetterProps {
  letter: string;
  isSelected: boolean;
  index: number;
}

const GuessLetter = ({ letter, isSelected, index }: GuessLetterProps) => {
  const guesses = useSelector((state: RootState) => state.GuessesSlice);
  const dispatch = useDispatch();

  const handelClick = () => {
    if (letter !== ' ') dispatch(changeSelect(index));
  };

  return (
    <Styled.LetterContainer
      isSpace={letter === ' '}
      isSelected={isSelected}
      onClick={handelClick}
    >
      {letter}
    </Styled.LetterContainer>
  );
};

export default GuessLetter;

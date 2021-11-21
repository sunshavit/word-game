import React from 'react';
import useToggle from '../Hooks/useToggle';
import * as Styled from '../Styles/SelectLetter.style';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store/store';
import { correctGuess, guess } from '../Store/Slices/GuessesSlice';

interface GuessLetterProps {
  letter: string;
}

const SelectLetter = ({ letter }: GuessLetterProps) => {
  const dispatch = useDispatch();
  const guesses = useSelector((state: RootState) => state.GuessesSlice);

  const handelClick = () => {
    dispatch(guess({ index: guesses.selectedCard, letter }));
  };

  return <Styled.LetterCard onClick={handelClick}>{letter}</Styled.LetterCard>;
};

export default SelectLetter;

import * as React from 'react';
import * as Styled from '../Styles/SelectLetter.style';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store/store';
import { guess } from '../Store/Slices/GuessesSlice';

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

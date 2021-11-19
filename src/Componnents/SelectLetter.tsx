import React from 'react';
import useToggle from '../Hooks/useToggle';
import * as Styled from '../Styles/SelectLetter.style';

interface GuessLetterProps {
  // isSelected : boolean,
  letter: string;
}

const SelectLetter = ({ letter }: GuessLetterProps) => {
  const { isChecked, changeChecked } = useToggle();

  const handelClick = () => {
    !isChecked && changeChecked();
  };

  return (
    <Styled.LetterCard isChecked={isChecked} onClick={handelClick}>
      {letter}
    </Styled.LetterCard>
  );
};

export default SelectLetter;

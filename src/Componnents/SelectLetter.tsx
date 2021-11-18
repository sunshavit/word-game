import React from 'react';
import * as Styled from '../Styles/SelectLetter.style';

interface GuessLetterProps {
    isSelected : boolean,
    letter : string,
}

const SelectLetter = ({isSelected,letter}:GuessLetterProps)=> {
    return (
        <Styled.LetterCard>
            {letter}
        </Styled.LetterCard>
    );
}

export default SelectLetter;
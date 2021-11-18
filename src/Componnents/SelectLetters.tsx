import React from 'react';
import * as Styled from '../Styles/SelectLetters.style';
import SelectLetter from './SelectLetter';

type Letters = string[];

const SelectLetters = ()=> {
    const letters : Letters  = ['s','l','p','s','l','p','s','l','p','s','l','p','s','l','p','s','l','p'];
    return (
        <Styled.LettersCardContainer>
            {letters.map((letter)=>(
                <SelectLetter letter={letter} isSelected={false} />
            ))}
        </Styled.LettersCardContainer>
    );
}

export default SelectLetters;
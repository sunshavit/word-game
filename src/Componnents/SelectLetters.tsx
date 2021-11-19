import React from 'react';
import * as Styled from '../Styles/SelectLetters.style';
import SelectLetter from './SelectLetter';


const SelectLetters = ()=> {
    const letters = ['s','l','p','s','l','p','s','l','p','s','l','p','s','l','p','s','l','p'];
    return (
        <Styled.LettersCardContainer>
            {letters.map((letter,index)=>(
                <SelectLetter key={`${letter}${index}`} letter={letter} />
            ))}
        </Styled.LettersCardContainer>
    );
}

export default SelectLetters;
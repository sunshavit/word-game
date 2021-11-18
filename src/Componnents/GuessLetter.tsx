import React from 'react';
import * as Styled from '../Styles/GuessLetter.style';

interface GuessLetterProps {
    isGuess : boolean,
    letter : string,
}

const GuessLetter = ({isGuess,letter}:GuessLetterProps)=> {
    return (
        <Styled.LetterContainer>
            {isGuess? letter : '' }
        </Styled.LetterContainer>
    );
}

export default GuessLetter;
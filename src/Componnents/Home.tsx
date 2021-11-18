import React from 'react';
import * as Styled from '../Styles/Home.style';
import SelectLetters from './SelectLetters';

const Home = ()=> {
    return (
        <Styled.Container>
            <Styled.ImgSection></Styled.ImgSection>
            <Styled.DisplayLetterSection></Styled.DisplayLetterSection>
            <SelectLetters/>
        </Styled.Container>
    );
}

export default Home;
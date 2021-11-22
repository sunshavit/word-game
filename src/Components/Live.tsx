import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import BrokenHeart from '../Assets/brokenHeart';
import Heart from '../Assets/Heart';
import { RootState } from '../Store/store';

interface testIdProps {
  testId: string;
}

const IconContainer = styled.div.attrs<testIdProps>(({ testId }) => ({
  testId: testId,
}))<testIdProps>`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const BrokenHeartStyle = styled.div`
  animation: ${fadeOut} 2s ease-out;
  opacity: 0;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
`;

const Live = () => {
  const mistake = useSelector((state: RootState) => state.GuessesSlice.mistake);
  const arrayOfMistake = new Array(3).fill(0);

  return (
    <Container>
      {arrayOfMistake.map((_, index) =>
        index < 3 - mistake ? (
          <IconContainer testId="heart" key={index}>
            <Heart />
          </IconContainer>
        ) : (
          <IconContainer testId="brokenHeart" key={index}>
            <BrokenHeartStyle>
              <BrokenHeart />
            </BrokenHeartStyle>
          </IconContainer>
        )
      )}
    </Container>
  );
};

export default Live;

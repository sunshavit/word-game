import React from 'react';
import { useDispatch } from 'react-redux';
import QuestionMark from '../Assets/QuestionMark';
import { correctGuess } from '../Slices/GuessesSlice';
import * as Styled from '../Styles/ImageSection.style';

interface ImageSectionProps {
  imageSrc?: string | null;
  guesses: string[];
  movieName?: string;
}

const ImageSection = ({ imageSrc, movieName, guesses }: ImageSectionProps) => {
  const dispatch = useDispatch();
  const handelClick = () => {
    if (movieName) {
      if (movieName.toLowerCase() === guesses.join('')) {
        dispatch(correctGuess());
      }
    }
  };

  return (
    <Styled.ImgSection>
      <Styled.Title>Guess What?</Styled.Title>
      <Styled.Img src={imageSrc ? imageSrc : ''} />
      <Styled.IconsContainer>
        <Styled.IconContainer>
          <QuestionMark />
        </Styled.IconContainer>
        <Styled.IconContainer>
          <QuestionMark />
        </Styled.IconContainer>
      </Styled.IconsContainer>
      <Styled.SubmitButton onClick={handelClick}>Submit</Styled.SubmitButton>
    </Styled.ImgSection>
  );
};

export default ImageSection;

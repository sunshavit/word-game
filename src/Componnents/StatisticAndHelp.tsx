import React from 'react';
import { useDispatch } from 'react-redux';
import Image from '../Assets/Image';
import QuestionMark from '../Assets/QuestionMark';
import { help } from '../Store/Slices/GuessesSlice';
import * as Styled from '../Styles/ImageSection.style';

interface ImageSectionProps {
  guesses: string[];
  movieName: string;
  changBlurImg: () => void;
}

const StatisticAndHelp = ({
  guesses,
  movieName,
  changBlurImg,
}: ImageSectionProps) => {
  const dispatch = useDispatch();
  const helpHandelClick = () => {
    const randomIndex = Math.floor(Math.random() * guesses.length);
    dispatch(
      help({ index: randomIndex, letter: movieName[randomIndex] || '' })
    );
  };

  return (
    <Styled.IconsContainer>
      <Styled.IconContainer onClick={helpHandelClick}>
        <QuestionMark />
      </Styled.IconContainer>
      <Styled.IconContainer onClick={changBlurImg}>
        <Image />
      </Styled.IconContainer>
    </Styled.IconsContainer>
  );
};

export default StatisticAndHelp;

import * as React from 'react';
import { useDispatch } from 'react-redux';
import { correctGuess, mistake } from '../Store/Slices/GuessesSlice';
import * as Styled from '../Styles/ImageSection.style';
import Live from './Live';
import StatisticAndHelp from './StatisticAndHelp';

interface ImageSectionProps {
  imageSrc?: string | null;
  guesses: string[];
  movieName?: string;
}

const ImageSection = ({ imageSrc, movieName, guesses }: ImageSectionProps) => {
  const [blur, setBlur] = React.useState(7);
  const dispatch = useDispatch();
  const handelClick = () => {
    if (movieName) {
      if (movieName.toLowerCase() === guesses.join('')) {
        dispatch(correctGuess());
      } else {
        dispatch(mistake());
      }
    }
  };

  const changeBlurImg = () => {
    setBlur(prev => prev - 1);
  };

  return (
    <Styled.ImgSection blurPx={`${blur}px`}>
      <Styled.Title>Guess What?</Styled.Title>
      <Styled.Img src={imageSrc ? imageSrc : ''} />
      <StatisticAndHelp
        guesses={guesses}
        movieName={movieName || ''}
        changBlurImg={changeBlurImg}
      />
      <Live />
      <Styled.SubmitButton onClick={handelClick}>
        Check the guess
      </Styled.SubmitButton>
    </Styled.ImgSection>
  );
};

export default ImageSection;

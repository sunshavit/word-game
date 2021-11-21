import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../Assets/Image';
import QuestionMark from '../Assets/QuestionMark';
import { addHint } from '../Store/Slices/GuessesSlice';
import * as Styled from '../Styles/ImageSection.style';
import Tooltip from '@mui/material/Tooltip';
import useToggle from '../Hooks/useToggle';
import Statistics from '../Assets/Statistics';
import { RootState } from '../Store/store';
import StatisticsModal from './StatisticsModal';

interface ImageSectionProps {
  changBlurImg: () => void;
  hintMessage: string;
}

const StatisticAndHelp = ({ changBlurImg, hintMessage }: ImageSectionProps) => {
  const dispatch = useDispatch();
  const guesses = useSelector((state: RootState) => state.GuessesSlice);
  const { isChecked, changeChecked } = useToggle();
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const changeTooltipState = () => {
    if (!isChecked) {
      dispatch(addHint());
    }
    changeChecked();
  };

  const showStatistics = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Styled.IconsContainer>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={changeTooltipState}
        open={isChecked}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={hintMessage}
        arrow
      >
        <Styled.IconContainer onClick={changeTooltipState}>
          <QuestionMark />
        </Styled.IconContainer>
      </Tooltip>
      <Tooltip title="change image to clearer" arrow>
        <Styled.IconContainer onClick={changBlurImg}>
          <Image />
        </Styled.IconContainer>
      </Tooltip>
      <Tooltip title="show your statistics" arrow>
        <Styled.IconContainer onClick={showStatistics}>
          <Statistics />
        </Styled.IconContainer>
      </Tooltip>
      <StatisticsModal
        isOpenModal={isOpenModal}
        hints={guesses.hint}
        mistake={guesses.mistake}
        corrects={guesses.correct}
        closeModal={closeModal}
      />
    </Styled.IconsContainer>
  );
};

export default StatisticAndHelp;

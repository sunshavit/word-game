import styled from 'styled-components';

interface Props {
  isChecked: boolean;
}

export const LetterCard = styled.button<Props>`
  height: 20%;
  width: 7%;
  background-color: #eab676;
  outline: none;
  padding: 10px;
  position: relative;
  font-weight: 500;
  font-size: 35px;
  border-radius: 4px;
  font-family: 'Raleway', sans-serif;
  transition: 0.6s;
  border: 0px;
  overflow: hidden;
  box-shadow: 4px 4px 0px 0px #e28743;
  margin: 1%;
  opacity: ${({ isChecked }) => (isChecked ? 0 : 1)};
  &:before {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
    transform: translateX(-100px) skewX(-15deg);
  }
  &:hover {
    background: #e4ba87;
    cursor: pointer;
    &:before {
      transform: translateX(300px) skewX(-15deg);
      opacity: 0.6;
      transition: 2.7s;
    }
  }
`;

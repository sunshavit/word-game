import styled from 'styled-components';

interface Props {
  isSelected: boolean;
  isSpace: boolean;
}

export const LetterContainer = styled.button<Props>`
  width: 3%;
  height: 40%;
  text-align: center;
  border: 0;
  border-bottom: 4px solid;
  outline: none;
  background-color: transparent;
  font-size: 30px;
  margin: 10px;
  cursor: ${({ isSpace }) => (isSpace ? 'default' : 'pointer')};
  transition: all 1s;
  opacity: ${({ isSpace }) => (isSpace ? 0 : 1)};
  box-shadow: ${({ isSelected }) =>
    isSelected &&
    `0px 20px 0px -10px #eab676, 0px -20px 0px -10px #eab676, 20px 0px 0px -10px #eab676, -20px 0px 0px -10px #eab676, 0px 0px 0px 10px #ffff, 5px 5px 15px 5px rgba(0,0,0,0);`};
`;

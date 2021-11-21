import styled from 'styled-components';

interface Props {
  isSelected: boolean;
  isSpace: boolean;
}

export const LetterContainer = styled.div`
  width: 2%;
  height: 25%;
  margin: 5px;
`;

export const LetterButton = styled.button<Props>`
  width: 100%;
  height: 100%;
  user-select: none;
  text-align: center;
  border: 0;
  border-bottom: 4px solid;
  outline: none;
  padding: 0px;
  background-color: transparent;
  font-size: 30px;
  @media (max-width: 1350px) {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
  cursor: ${({ isSpace }) => (isSpace ? 'default' : 'pointer')};
  transition: all 1s;
  opacity: ${({ isSpace }) => (isSpace ? 0 : 1)};
  box-shadow: ${({ isSelected }) =>
    isSelected &&
    `0px 20px 0px -10px #eab676, 0px -20px 0px -10px #eab676, 20px 0px 0px -10px #eab676, -20px 0px 0px -10px #eab676, 0px 0px 0px 10px #ffff, 5px 5px 15px 5px rgba(0,0,0,0);`};
`;

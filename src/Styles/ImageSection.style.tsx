import styled from 'styled-components';

interface ImgProps {
  src: string;
}

interface BlurProps {
  blurPx?: string;
  color?: string;
}

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  padding: 10px;
  cursor: pointer;
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: end;
`;

export const Img = styled.img.attrs<ImgProps>(({ src }) => ({
  src: `http://image.tmdb.org/t/p/w500/${src}`,
}))<ImgProps>`
  width: 30%;
  height: 50%;
  user-select: none;
`;

export const ImgSection = styled.div<BlurProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 45%;
  background-color: ${({ color = '#76b5c5' }) => color};
  ${Img} {
    filter: ${({ blurPx = 7 }) => `blur(${blurPx})`};
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #ffff;
  user-select: none;
`;

export const SubmitButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: #ffff;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.5s ease-in;
  user-select: none;
  :hover {
    color: #4caf50;
    background-color: #ffff;
  }
`;

export const LoseTitle = styled.div`
  font-size: 30px;
  color: #ffff;
`;

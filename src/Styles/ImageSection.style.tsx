import styled from 'styled-components';

interface ImgProps {
  src: string;
}

export const IconContainer = styled.div`
  padding: 5px;
  cursor: pointer;
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: end;
`;

export const ImgSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 45%;
  background-color: #76b5c5;
`;

export const Img = styled.img.attrs<ImgProps>(({ src }) => ({
  src: `http://image.tmdb.org/t/p/w500/${src}`,
}))`
  width: 30%;
  height: 50%;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #ffff;
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
  :hover {
    color: #4caf50;
    background-color: #ffff;
  }
`;

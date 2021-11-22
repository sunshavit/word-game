import { Modal } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #ffff;
  border: 2px solid #000;
  box-shadow: 24;
`;

const Title = styled.div`
  justify-self: center;
  font-size: 50px;
  border-bottom: 2px solid #000;
`;

const Row = styled.div`
  display: flex;
  font-size: 30px;
  margin: 5px;
`;

interface StatisticsModalProps {
  isOpenModal: boolean;
  hints: number;
  mistake: number;
  corrects: number;
  closeModal: () => void;
}

const StatisticsModal: React.FC<StatisticsModalProps> = ({
  isOpenModal,
  hints,
  mistake,
  corrects,
  closeModal,
}) => {
  return (
    <Modal open={isOpenModal} onClose={closeModal}>
      <Container>
        <Row>
          <Title>Statistic</Title>
        </Row>
        <Row>hints: {hints}</Row>
        <Row>mistake: {mistake}</Row>
        <Row>corrects: {corrects}</Row>
      </Container>
    </Modal>
  );
};

export default StatisticsModal;

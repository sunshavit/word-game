import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StatisticsModal from '../Components/StatisticsModal';

const closeModalMock = jest.fn();
test('StatisticsModal render and show the player`s statistics', () => {
  const { rerender } = render(
    <StatisticsModal
      isOpenModal
      hints={5}
      mistake={1}
      corrects={1}
      closeModal={closeModalMock}
    />
  );
  let hintText = screen.getByText('hint: 5');
  let mistakeText = screen.getByText('mistake: 1');
  let correctsText = screen.getByText('corrects: 1');
  expect(hintText).toBeInTheDocument();
  expect(mistakeText).toBeInTheDocument();
  expect(correctsText).toBeInTheDocument();

  rerender(
    <StatisticsModal
      isOpenModal
      hints={4}
      mistake={2}
      corrects={2}
      closeModal={closeModalMock}
    />
  );
  hintText = screen.getByText('hint: 4');
  mistakeText = screen.getByText('mistake: 2');
  correctsText = screen.getByText('corrects: 2');
  expect(hintText).toBeInTheDocument();
  expect(mistakeText).toBeInTheDocument();
  expect(correctsText).toBeInTheDocument();
});

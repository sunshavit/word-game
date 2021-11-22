import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GuessLetter from '../Components/GuessLetter';
import MockStoreWrapper, { mockState } from './MockStoreWrapper';

test('GuessLetter render and get the correct letter and check if selected', () => {
  render(
    <MockStoreWrapper mockState={mockState}>
      <GuessLetter letter="s" isSelected index={0} />
    </MockStoreWrapper>
  );
  const letterText = screen.getByText('s');
  expect(letterText).toBeInTheDocument();
  expect(letterText).toHaveStyle({
    'box-shadow':
      '0px 20px 0px -10px #eab676,0px -20px 0px -10px #eab676,20px 0px 0px -10px #eab676,-20px 0px 0px -10px #eab676,0px 0px 0px 10px #ffff,5px 5px 15px 5px rgba(0,0,0,0)',
  });
  expect(letterText).toHaveStyle({
    opacity: '1',
  });
});

test('GuessLetter render and get space and after get letter', () => {
  const { rerender } = render(
    <MockStoreWrapper mockState={mockState}>
      <GuessLetter letter=" " isSelected={false} index={0} />
    </MockStoreWrapper>
  );
  const spaceText = screen.getByRole('button');
  expect(spaceText).toBeInTheDocument();
  expect(spaceText).toHaveStyle({
    opacity: '0',
  });

  rerender(
    <MockStoreWrapper mockState={mockState}>
      <GuessLetter letter="s" isSelected={false} index={0} />
    </MockStoreWrapper>
  );
  const letterText = screen.getByRole('button');
  expect(letterText).toBeInTheDocument();
  expect(letterText).toHaveStyle({
    opacity: '1',
  });
});

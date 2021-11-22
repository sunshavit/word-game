import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectLetters from '../Components/SelectLetters';
import MockStoreWrapper, { mockState } from './MockStoreWrapper';

test('letters component render all the letters ', () => {
  const { rerender } = render(
    <MockStoreWrapper mockState={mockState}>
      <SelectLetters letters={['s', 'g', 'j']} />
    </MockStoreWrapper>
  );

  const letterButton = screen.getAllByRole('button');
  expect(letterButton).toHaveLength(6);
});

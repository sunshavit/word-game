import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Live from '../Components/Live';
import MockStoreWrapper, { mockState } from './MockStoreWrapper';

test('Live show all svg', () => {
  const { container } = render(
    <MockStoreWrapper mockState={mockState}>
      <Live />
    </MockStoreWrapper>
  );
  const svgsHeart = container.querySelectorAll('svg');
  expect(svgsHeart).toHaveLength(3);
});

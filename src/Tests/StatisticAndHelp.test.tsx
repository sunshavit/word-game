import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StatisticAndHelp from '../Components/StatisticAndHelp';
import MockStoreWrapper, { mockState } from './MockStoreWrapper';
import userEvent from '@testing-library/user-event';

const onBlurClick = jest.fn();
const mockHint = 'test';

test('Statistic and help render ok and show all statistic', () => {
  const { container } = render(
    <MockStoreWrapper mockState={mockState}>
      <StatisticAndHelp changBlurImg={onBlurClick} hintMessage={mockHint} />
    </MockStoreWrapper>
  );
  const svgsButton = container.querySelectorAll('svg');
  svgsButton.forEach(svg => {
    userEvent.click(svg);
  });
  expect(onBlurClick).toBeCalled();
  const hintText = screen.getByText('hints: 1');
  expect(hintText).toBeInTheDocument;
});

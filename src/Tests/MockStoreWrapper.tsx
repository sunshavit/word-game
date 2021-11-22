import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const mockState = {
  GuessesSlice: {
    guess: [],
    img: '',
    selectedCard: 0,
    mistake: 0,
    correct: 0,
    hint: 1,
  },
};

const mockStore = configureMockStore([thunk]);

interface StoreWrapper {
  children: any;
  mockState: object;
}

const MockStoreWrapper = ({ children, mockState }: StoreWrapper) => {
  const store = mockStore(mockState);

  return <Provider store={store}>{children}</Provider>;
};

export default MockStoreWrapper;

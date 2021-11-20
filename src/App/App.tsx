import React from 'react';
import Home from '../Componnents/Home';
import { store } from '../Store/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;

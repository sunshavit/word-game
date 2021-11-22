import React from 'react';
import Home from '../Components/Home';
import store, { persist } from '../Store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
  <PersistGate persistor={persist}>
    <Provider store={store}>
      <Home />
    </Provider>
  </PersistGate>
);

export default App;

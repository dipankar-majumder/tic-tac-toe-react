import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Board from './components/Board';

function App() {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  );
}

export default App;

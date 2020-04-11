import React from 'react';
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import rootReducer from '../../reducers'

import Header from '../Header';
import Main from '../Main';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
    </Provider>
  );
}

export default App;

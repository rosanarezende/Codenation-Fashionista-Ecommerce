import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../reducers'

import Ecommerce from '../Ecommerce';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Ecommerce/>
    </Provider>
  );
}

export default App;

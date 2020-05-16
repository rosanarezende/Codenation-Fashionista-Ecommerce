import React from 'react';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import { generateReducers } from '../../reducers'

import Router from '../Router';

const history = createBrowserHistory()

const store = createStore(
  generateReducers(history),
  applyMiddleware(routerMiddleware(history), thunk)
)

function App() {
  return (
    <Provider store={store}>
      <Router history={history}/>
    </Provider>
  );
}

export default App;

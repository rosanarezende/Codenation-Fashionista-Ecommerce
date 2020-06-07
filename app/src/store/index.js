import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import { generateReducers } from '../reducers'

export const history = createBrowserHistory()

export const store = createStore(
    generateReducers(history),
    applyMiddleware(routerMiddleware(history), thunk)
)
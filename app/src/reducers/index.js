import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import products from './products'
import shoppingCart from './shoppingCart'
import search from './search'

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        
        products,
        shoppingCart,
        search
})
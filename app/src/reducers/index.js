import { combineReducers } from 'redux'
import products from './products'
import shoppingCart from './shoppingCart'
import search from './search'

const rootReducer = combineReducers({
    products,
    shoppingCart,
    search
})

export default rootReducer
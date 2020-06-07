import shoppingCart from './shoppingCart'
import {
    setShoppingCart, 
    setAllItensInShoppingCart
} from '../actions/shoppingCart'

const mockedAppears = Boolean
const mockProducts = [{}]
const mockInitialState = {}

describe("ShoppingCart Reducer", () => {

    it("setShoppingCart", () => {
        const mockedAction = setShoppingCart(mockedAppears)
        const newStore = shoppingCart(mockInitialState, mockedAction)
        expect(newStore.shoppingCartAppears).toHaveLength(1)
    })

    it("setAllItensInShoppingCart", () => {
        const mockedAction = setAllItensInShoppingCart(mockProducts)
        const newStore = shoppingCart(mockInitialState, mockedAction)
        expect(newStore.allItensInShoppingCart).toHaveLength(1)
    })

})

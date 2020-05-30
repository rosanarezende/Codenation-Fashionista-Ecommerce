import { 
    setShoppingCart, 
    setAllItensInShoppingCart, 
    addProductToCart, 
    removeProductFromCart, 
    changeQuantity
} from './shoppingCart'
import { products } from '../utils/mock'

const mockedAppears = true
const mockProducts = [...products]
const mockProduct = {...products[0]}
const mockProductId = "001"
const mockedInformation = {}

describe("ShoppingCart Actions", () => {

    it("setShoppingCart", () => {
        const mockedAction = setShoppingCart(mockedAppears)

        expect(mockedAction.type).toEqual("SET_SHOPPING_CART")
        expect(mockedAction.payload.appears).toEqual(mockedAppears)
        expect(mockedAction.payload.appears).toBeDefined()
    })

    it("setAllItensInShoppingCart", () => {
        const mockedAction = setAllItensInShoppingCart(mockProducts)

        expect(mockedAction.type).toEqual("SET_ALL_INTENS_IN_SHOPPING_CART")
        expect(mockedAction.payload.products).toEqual(mockProducts)
        expect(mockedAction.payload.products).toBeDefined()
    })

    it("addProductToCart", () => {
        const mockedAction = addProductToCart(mockProduct)

        expect(mockedAction.type).toEqual("ADD_PRODUCT_TO_CART")
        expect(mockedAction.payload.product).toEqual(mockProduct)
        expect(mockedAction.payload.product).toBeDefined()
    })

    it("removeProductFromCart", () => {
        const mockedAction = removeProductFromCart(mockProductId)

        expect(mockedAction.type).toEqual("REMOVE_PRODUCT_FROM_CART")
        expect(mockedAction.payload.productId).toEqual(mockProductId)
        expect(mockedAction.payload.productId).toBeDefined()
    })

    it("changeQuantity", () => {
        const mockedAction = changeQuantity(mockedInformation)

        expect(mockedAction.type).toEqual("CHANGE_QUANTITY")
        expect(mockedAction.payload.information).toEqual(mockedInformation)
        expect(mockedAction.payload.information).toBeDefined()
    })

})
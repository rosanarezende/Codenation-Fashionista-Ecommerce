import products from './products'
import { setProducts, setProductDetail, setSelectedSize } from '../actions/products'

const mockInitialState = {}
const mockProducts = [{}]
const mockTest = Object

describe("Products Reducer", () => {

    it("setProducts", () => {
        const mockedAction = setProducts(mockProducts)
        const newStore = products(mockInitialState, mockedAction)
        expect(newStore.allProducts).toHaveLength(1)
    })

    it("setProductDetail", () => {
        const mockedAction = setProductDetail(mockTest)
        const newStore = products(mockInitialState, mockedAction)
        expect(newStore.productDetail).toHaveLength(1)
    })

    it("setSelectedSize", () => {
        const mockedAction = setSelectedSize(mockTest)
        const newStore = products(mockInitialState, mockedAction)
        expect(newStore.selectedSize).toHaveLength(1)
    })

})
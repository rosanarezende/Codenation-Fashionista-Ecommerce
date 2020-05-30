
import axios from 'axios'
import { getProducts, setProductDetail, setSelectedSize } from './products'
import { products } from '../utils/mock'

const mockProducts = [...products]
const mockProduct = {...products[0]}
const mockSize = {...products[0].sizes[0].size}

describe("Products Actions", () => {

    describe('Actions creators', () => {

        it("setProductDetail", () => {
            const mockedAction = setProductDetail(mockProduct)

            expect(mockedAction.type).toEqual("SET_PRODUCT_DETAIL")
            expect(mockedAction.payload.product).toEqual(mockProduct)
            expect(mockedAction.payload.product).toBeDefined()

        })

        it("setSelectedSize", () => {
            const mockedAction = setSelectedSize(mockSize)

            expect(mockedAction.type).toEqual("SET_SELECTED_SIZE")
            expect(mockedAction.payload.size).toEqual(mockSize)
            expect(mockedAction.payload.size).toBeDefined()
        })

    })

    describe('Async actions', () => {
        let mockDispatch
        beforeEach(() => {
            mockDispatch = jest.fn()
        });

        it("getProducts", async() => {
            axios.get = jest.fn(() => ({ data: mockProducts }))
            await getProducts()(mockDispatch)

            expect(mockDispatch).toHaveBeenCalled()
            expect(mockDispatch).toHaveBeenCalledWith({
                type: "SET_PRODUCTS",
                payload: { products: mockProducts}
            })
        })

    })

})
const initialState = {
    allProducts: [],
    productDetail: ""
}

const products = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_PRODUCTS':
            return {
                ...state,
                allProducts: action.payload.products
            }

        case 'SET_PRODUCT_DETAIL':
            return {
                ...state,
                productDetail: action.payload.product
            }

        default:
            return state
    }
}

export default products
const initialState = {
    allProducts: [],
    productDetail: "",
    selectedSize: ""
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

        case 'SET_SELECTED_SIZE':
            return {
                ...state,
                selectedSize: action.payload.size
            }

        default:
            return state
    }
}

export default products
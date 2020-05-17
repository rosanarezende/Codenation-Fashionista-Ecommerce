
export const setShoppingCart = appears => ({
    type: "SET_SHOPPING_CART",
    payload: {
        appears
    }
})

export const setAllItensInShoppingCart = products => ({
    type: "SET_ALL_INTENS_IN_SHOPPING_CART",
    payload: {
        products
    }
})

export const addProductToCart = product => ({
    type: "ADD_PRODUCT_TO_CART",
    payload: {
        product
    }
})
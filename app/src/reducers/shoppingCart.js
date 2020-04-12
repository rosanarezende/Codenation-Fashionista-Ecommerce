const initialState = {
    shoppingCartAppears: false,
    allItensInShoppingCart: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}

const shoppingCart = (state = initialState, action) => {

    switch(action.type) {

        case 'SET_SHOPPING_CART':
            return {
                ...state,
                shoppingCartAppears: action.payload.appears
            }

        default:
            return state
    }
}

export default shoppingCart
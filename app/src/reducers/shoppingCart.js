const initialState = {
    shoppingCartAppears: true,
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
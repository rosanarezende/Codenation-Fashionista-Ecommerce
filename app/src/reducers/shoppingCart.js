const initialState = {
    shoppingCartAppears: false,
    allItensInShoppingCart: [],
}

const shoppingCart = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_SHOPPING_CART':
            return {
                ...state,
                shoppingCartAppears: action.payload.appears
            }

        case 'SET_ALL_INTENS_IN_SHOPPING_CART':
            return {
                ...state,
                allItensInShoppingCart: action.payload.products
            }

        case 'ADD_PRODUCT_TO_CART':
            const copyAllItensInShoppingCart = [...state.allItensInShoppingCart]
            copyAllItensInShoppingCart.push(action.payload.product)
            return {
                ...state,
                allItensInShoppingCart: copyAllItensInShoppingCart
            }

        case 'REMOVE_PRODUCT_FROM_CART':
            const filteredItens = state.allItensInShoppingCart.filter(item => {
                return item.id !== action.payload.productId
            })
            return {
                ...state,
                allItensInShoppingCart: filteredItens
            }
        
        case 'CHANGE_QUANTITY':
            const copyAllItensInShoppingCart2 = [...state.allItensInShoppingCart]
            const productInformation = action.payload.information
            const findProduct = state.allItensInShoppingCart.findIndex(item =>
                item.id === productInformation.id)
            if(productInformation.option === "remove"){
                copyAllItensInShoppingCart2[findProduct].quantity -= 1
            } else if(productInformation.option === "add"){
                copyAllItensInShoppingCart2[findProduct].quantity += 1
            }
            return {
                ...state,
                allItensInShoppingCart: copyAllItensInShoppingCart2
            }

        default:
            return state
    }
}

export default shoppingCart
const initialState = {
    shoppingCartAppears: false,
    allItensInShoppingCart: [
        // {
        //     id: 1,
        //     image: "",
        // 	name: "T-SHIRT LEATHER DULL",
        // 	actual_price: "R$ 149,90",
        // 	installments: "3x R$ 49,97",
        // 	size: "GG",
        // 	quantity: 1
        // },
        // {
        //     id: 2,
        //     image: "https://viniciusvinna.netlify.app/assets/api-fashionista/20002581_614_catalog_1.jpg",
        // 	name: "BATA DECOTE FLUID",
        // 	actual_price: "R$ 79,00",
        // 	installments: "3x R$ 39,97",
        // 	size: "P",
        // 	quantity: 2
        // },
    ],
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

        default:
            return state
    }
}

export default shoppingCart
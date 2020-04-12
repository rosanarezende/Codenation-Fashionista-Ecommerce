const initialState = {
    shoppingCartAppears: false,
    allItensInShoppingCart: [
        {
            id: 1,
            image: "https://user-images.githubusercontent.com/45580434/79032512-93dbb780-7b7d-11ea-90e0-660875a7e39e.png",
            name: "Vestido Transpasse Bow",
            value: 199.9,
            size: 40,
            quantity: 1
        },
        {
            id: 2,
            image: "https://user-images.githubusercontent.com/45580434/79032515-96d6a800-7b7d-11ea-8165-4eccc412c144.png",
            name: "Regata Alcinha Folk",
            value: 99.9,
            size: 40,
            quantity: 1
        },
        {
            id: 3,
            image: "https://user-images.githubusercontent.com/45580434/79032517-98a06b80-7b7d-11ea-81a6-b4fe410cc400.png",
            name: "Top Croped Suede",
            value: 129.9,
            size: 40,
            quantity: 2
        },
        {
            id: 4,
            image: "https://user-images.githubusercontent.com/45580434/79032512-93dbb780-7b7d-11ea-90e0-660875a7e39e.png",
            name: "Vestido Transpasse Bow",
            value: 199.9,
            size: 40,
            quantity: 1
        },
        {
            id: 5,
            image: "https://user-images.githubusercontent.com/45580434/79032515-96d6a800-7b7d-11ea-8165-4eccc412c144.png",
            name: "Regata Alcinha Folk",
            value: 99.9,
            size: 40,
            quantity: 1
        },
    ],
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
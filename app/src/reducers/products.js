const initialState = {
    allProducts: [
        {
            id: 1,
            image: "https://user-images.githubusercontent.com/45580434/79032512-93dbb780-7b7d-11ea-90e0-660875a7e39e.png",
            name: "Vestido Transpasse Bow",
            value: 199.9
        },
        {
            id: 2,
            image: "https://user-images.githubusercontent.com/45580434/79032515-96d6a800-7b7d-11ea-8165-4eccc412c144.png",
            name: "Regata Alcinha Folk",
            value: 99.9
        },
        {
            id: 3,
            image: "https://user-images.githubusercontent.com/45580434/79032517-98a06b80-7b7d-11ea-81a6-b4fe410cc400.png",
            name: "Top Croped Suede",
            value: 129.9
        },
        {
            id: 4,
            image: "https://user-images.githubusercontent.com/45580434/79032518-9a6a2f00-7b7d-11ea-8640-b320faf156d4.png",
            name: "Bata Decote Fluid",
            value: 149.9
        },
        {
            id: 5,
            image: "https://user-images.githubusercontent.com/45580434/79032442-d781f180-7b7c-11ea-927f-c30c58ddd501.png",
            name: "Camisa Suede Span",
            value: 189.9
        },
        {
            id: 6,
            image: "https://user-images.githubusercontent.com/45580434/79032444-da7ce200-7b7c-11ea-9280-fff5499165e1.png",
            name: "Calça Classic Print",
            value: 159.9
        },
        {
            id: 7,
            image: "https://user-images.githubusercontent.com/45580434/79032445-dd77d280-7b7c-11ea-9850-dc933d1a91d5.png",
            name: "Regata Alcinha Folk",
            value: 99.9
        }
    ]
}

const products = (state = initialState, action) => {

    switch(action.type) {

        case 'SET_PRODUCTS':
            return {
                ...state,
                allProducts: action.payload.products
            }

        default:
            return state
    }
}

export default products
const initialState = {
    searchAppears: false,
}

const search = (state = initialState, action) => {

    switch(action.type) {

        case 'SET_SEARCH':
            return {
                ...state,
                searchAppears: action.payload.appears
            }

        default:
            return state
    }
}

export default search
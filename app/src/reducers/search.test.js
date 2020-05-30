import search from './search'
import { setSearch } from '../actions/search'

const mockInitialState = {}
const mockedAppears = Boolean

describe("Search Reducer", () => {

    it("setSearch", () => {
        const mockedAction = setSearch(mockedAppears)
        const newStore = search(mockInitialState, mockedAction)
        expect(newStore.searchAppears).toHaveLength(1)
    })

})
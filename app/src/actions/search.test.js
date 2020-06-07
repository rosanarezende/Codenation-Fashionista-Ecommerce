import { setSearch } from './search'

const mockedAppears = true

describe("Search Actions", () => {

    it("setSearch", () => {
        const mockedAction = setSearch(mockedAppears)

        expect(mockedAction.type).toEqual("SET_SEARCH")
        expect(mockedAction.payload.appears).toEqual(mockedAppears)
        expect(mockedAction.payload.appears).toBeDefined()

    })

})
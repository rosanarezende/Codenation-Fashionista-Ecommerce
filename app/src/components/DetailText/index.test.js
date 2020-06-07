import React from "react";
import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import DetailText from "./index"
// import { products } from "../../utils/mock"

const mockStore = configureMockStore();
const store = mockStore({});

// const mockProduct = {...products[4]}

describe("DetailText", () => {
    let getByTestId
    beforeEach(() => {
        getByTestId = render(
            <Provider store={store}>
                <DetailText />
            </Provider>
        ).getByTestId
    })
    
    it("should render DetailText correctly", async () => {
        const detailText = getByTestId("detail-text")        
        expect(detailText).toHaveClass("detail__right")
    })


})
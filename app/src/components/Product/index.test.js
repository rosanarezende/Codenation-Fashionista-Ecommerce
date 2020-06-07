import React from "react";
import { render } from "@testing-library/react"
import { products } from "../../utils/mock"
import { Product }  from "./index"

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

const mockProduct = {...products[4]}

describe("Product", () => {
    let getByTestId
    beforeEach(() => {
        getByTestId = render(
            <Provider store={store}>
                <Product product={mockProduct}/>
            </Provider>
        ).getByTestId
    })
    
    it("should render PRODUCT correctly", async () => {
        const product = getByTestId("product")        
        expect(product).toHaveClass("product")
    })


})
import React from "react";
import { render } from "@testing-library/react"
import { products } from "../../utils/mock"
import ProductInSearch  from "./index"

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

const mockProduct = {...products[4]}

describe("ProductInSearch", () => {
    let getByTestId
    beforeEach(() => {
        getByTestId = render(
            <Provider store={store}>
                <ProductInSearch product={mockProduct}/>
            </Provider>
        ).getByTestId
        
    })
    
    it("should render ProductInSearch correctly", async () => {
        const product = getByTestId("product-in-search")        
        expect(product).toHaveClass("product-in-search")
    })


})
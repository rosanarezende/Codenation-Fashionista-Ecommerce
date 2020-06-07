import React from "react";
import { render } from "@testing-library/react"
import { products } from "../../utils/mock"
import ProductInCart  from "./index"

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

const mockProduct = {...products[4]}

describe("ProductInCart", () => {
    let getByTestId
    beforeEach(() => {
        getByTestId = render(
            <Provider store={store}>
                <ProductInCart product={mockProduct}/>
            </Provider>
        ).getByTestId
    })
    
    it("should render ProductInCart correctly", async () => {
        const product = getByTestId("product-in-cart")        
        expect(product).toHaveClass("product-in-cart")
    })


})
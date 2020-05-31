import React from "react";
import { render } from "@testing-library/react"
import { productsInCart } from "../../utils/mock"
import { Header }  from "./index"

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

const mockProductsInCart = [...productsInCart]

describe("Header", () => {
    let getByTestId
    beforeEach(() => {
        getByTestId = render(
            <Provider store={store}>
                <Header allItensInShoppingCart={mockProductsInCart}/>
            </Provider>
        ).getByTestId
    })
    
    it("should render HEADER correctly", async () => {
        const header = getByTestId("header")        
        expect(header).toHaveClass("header")
    })


})
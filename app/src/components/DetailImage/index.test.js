import React from "react";
import { render } from "@testing-library/react"
import { products } from "../../utils/mock"
import DetailImage from "./index"

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

const store = mockStore({});

// na posição 4 temos produto em promoção... nas demais não
    // funciona para todos
const mockProduct = {...products[4]}

describe("DetailImage", () => {
    let getByTestId
    beforeEach(() => {
        getByTestId = render(
            <Provider store={store}>
                <DetailImage product={mockProduct}/>
            </Provider>
        ).getByTestId
    })
    
    it("should render IMAGE correctly", async () => {
        const image = getByTestId("image")        
        expect(image).toHaveClass("detail__image")

    })

    // it("should render STAMP correctly", async () => {       
    //     // só tem stamp em produto em promoção
    //     if(mockProduct.on_sale){
    //         const stamp = getByTestId("stamp")
    //         expect(stamp).toHaveClass("detail__stamp")
    //         expect(stamp).toHaveTextContent(mockProduct.discount_percentage)
    //     }
    // })

})
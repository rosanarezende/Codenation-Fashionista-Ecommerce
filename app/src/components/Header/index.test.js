import React from "react";
import { render } from "@testing-library/react"
import { productsInCart } from "../../utils/mock"
import { Header }  from "./index"

const mockProductsInCart = [...productsInCart]

describe("Header", () => {
    let getByTestId
    beforeEach(() => {
        const view = render(<Header allItensInShoppingCart={mockProductsInCart}/>)
        getByTestId = view.getByTestId
    })
    
    it("should render HEADER correctly", async () => {
        const header = getByTestId("header")        
        expect(header).toHaveClass("header")
    })


})
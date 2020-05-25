import React from "react";
import { render } from "@testing-library/react"
import { products } from "../../utils/mock"
import ProductInCart  from "./index"

const mockProduct = {...products[4]}

describe("ProductInCart", () => {
    let getByTestId
    beforeEach(() => {
        const view = render(<ProductInCart product={mockProduct}/>)
        getByTestId = view.getByTestId
    })
    
    it("should render ProductInCart correctly", async () => {
        const product = getByTestId("product-in-cart")        
        expect(product).toHaveClass("product-in-cart")
    })


})
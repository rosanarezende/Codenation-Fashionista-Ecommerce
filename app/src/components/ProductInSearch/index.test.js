import React from "react";
import { render } from "@testing-library/react"
import { products } from "../../utils/mock"
import ProductInSearch  from "./index"

const mockProduct = {...products[4]}

describe("ProductInSearch", () => {
    let getByTestId
    beforeEach(() => {
        const view = render(<ProductInSearch product={mockProduct}/>)
        getByTestId = view.getByTestId
    })
    
    it("should render ProductInSearch correctly", async () => {
        const product = getByTestId("product-in-search")        
        expect(product).toHaveClass("product-in-search")
    })


})
import React from "react";
import { render } from "@testing-library/react"
import { products } from "../../utils/mock"
import { Product }  from "./index"

const mockProduct = {...products[4]}

describe("Product", () => {
    let getByTestId
    beforeEach(() => {
        const view = render(<Product product={mockProduct}/>)
        getByTestId = view.getByTestId
    })
    
    it("should render PRODUCT correctly", async () => {
        const product = getByTestId("product")        
        expect(product).toHaveClass("product")
    })


})
import React from "react";
import { render } from "@testing-library/react"
import { products } from "../../utils/mock"
import DetailImage from "./index"

const mockProduct = products[4]

describe("DetailImage", () => {
    let getByTestId
    beforeEach(() => {
        const view = render(<DetailImage product={mockProduct} />)
        getByTestId = view.getByTestId
    })
    
    it("should render IMAGE correctly", async () => {
        const image = getByTestId("image")        
        expect(image).toHaveClass("detail__image")
    })

    it("should render STAMP correctly", async () => {       
        // só tem stamp em produto em promoção
        if(mockProduct.on_sale){
            const stamp = getByTestId("stamp")
            expect(stamp).toHaveClass("detail__stamp")
        }
    })

})
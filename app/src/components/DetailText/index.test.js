import React from "react";
import { render } from "@testing-library/react"
import { products } from "../../utils/mock"
import DetailText from "./index"

const mockProduct = {...products[4]}

describe("DetailText", () => {
    let getByTestId
    beforeEach(() => {
        const view = render(<DetailText product={mockProduct}/>)
        getByTestId = view.getByTestId
    })
    
    it("should render DetailText correctly", async () => {
        const detailText = getByTestId("detail-text")        
        expect(detailText).toHaveClass("detail__right")
    })


})
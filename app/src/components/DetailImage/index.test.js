import React from "react";
import { render } from "@testing-library/react"

import DetailImage from "./index"

const mockProduct = {
    "name": "T-SHIRT LEATHER DULL",
    "style": "20002602",
    "code_color": "20002602_027",
    "color_slug": "marinho",
    "color": "MARINHO",
    "on_sale": true,
    "regular_price": "R$ 139,90",
    "actual_price": "R$ 119,90",
    "discount_percentage": "12%",
    "installments": "3x R$ 39,97",
    "image": "",
    "sizes": [
        {
            "available": true,
            "size": "PP",
            "sku": "5793_1000032_0_PP"
        },
        {
            "available": true,
            "size": "P",
            "sku": "5793_1000032_0_P"
        },
        {
            "available": true,
            "size": "M",
            "sku": "5793_1000032_0_M"
        },
        {
            "available": false,
            "size": "G",
            "sku": "5793_1000032_0_G"
        },
        {
            "available": false,
            "size": "GG",
            "sku": "5793_1000032_0_GG"
        }
    ]
}

describe("DetailImage", () => {    
    
    it("should render IMAGE correctly", async () => {
        const { getByTestId}  = render(<DetailImage product={mockProduct} />)
        const image = getByTestId("image")        

        expect(image).toHaveClass("detail__image")
    })

    it("should render STAMP correctly", async () => {
        const { getByTestId } = render(<DetailImage product={mockProduct} />)
        
        // só tem stamp em produto em promoção
        if(mockProduct.on_sale){
            const stamp = getByTestId("stamp")
            expect(stamp).toHaveClass("detail__stamp")
        }
    })

})
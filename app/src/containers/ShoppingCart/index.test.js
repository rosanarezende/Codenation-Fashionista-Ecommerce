import React from "react";
import { render, fireEvent } from "@testing-library/react"
import { productsInCart } from "../../utils/mock"
import { ShoppingCart } from './index'

const mockAllItensInShoppingCart = [...productsInCart]
const mockSetShoppingCart = jest.fn()

describe("ShoppingCart", () => {
    let getByTestId
    beforeEach(() => {
        const view = render(<ShoppingCart allItensInShoppingCart={mockAllItensInShoppingCart} setShoppingCart={mockSetShoppingCart}/>)
        getByTestId = view.getByTestId
    })

    it("should render ShoppingCart correctly", async () => {
        const cart = getByTestId("shopping-cart")        
        expect(cart).toHaveClass("shopping-cart")
    })
    

    // it("should render INPUT correctly", async () => {
    //     const input = await getByTestId("input")        
    //     expect(input).toHaveClass("search__input")

    //     const event = { target: { value: "blusa" } }
        
    //     // tem como buscar o filteredItend direto na página?
    //     const filteredItens = mockProducts.filter(product =>
    //         product.name.toLowerCase().includes(event.target.value.toLowerCase())
    //     )

    //     fireEvent.change(input, event)
    //     const content = await getByTestId("search-any")
    //     if(filteredItens.length === 0){
    //         expect(content.innerHTML).toBe("Nenhum item encontrado")
    //     } else {
    //         expect(content.innerHTML).toBe(`${filteredItens.length} itens`)
    //     }
    // })

    // it("should render BUTTON correctly", async () => {
    //     const icon = await getByTestId("icon")
    //     expect(icon).toHaveClass("search__icon-link")

    //     // fireEvent.click(icon)
    //     // gostaria de testar se a store mudou de true para false no appears desapears

    // })



})
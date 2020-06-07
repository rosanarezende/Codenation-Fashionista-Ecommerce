import React from "react";
import { render, fireEvent } from "@testing-library/react"
import { products } from "../../utils/mock"
import { Search } from './index' // peguei a versão não conectada

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

const mockProducts = products
const mockSetSeach = jest.fn()

describe("Search", () => {
    let getByTestId
    beforeEach(() => {
        getByTestId = render(
            <Provider store={store}>
                <Search allProducts={mockProducts} setSearch={mockSetSeach}/>
            </Provider>
        ).getByTestId
    })

    it("should render INPUT correctly", async () => {
        const input = await getByTestId("input")        
        expect(input).toHaveClass("search__input")

        const event = { target: { value: "blusa" } }
        
        // tem como buscar o filteredItend direto na página?
        const filteredItens = mockProducts.filter(product =>
            product.name.toLowerCase().includes(event.target.value.toLowerCase())
        )

        fireEvent.change(input, event)
        const content = await getByTestId("search-any")
        // console.log(filteredItens.length)
        if(filteredItens.length === 0){
            expect(content.innerHTML).toBe("Nenhum item encontrado")
        } else {
            expect(content.innerHTML).toBe(` itens`)
        }
    })

    it("should render BUTTON correctly", async () => {
        const icon = await getByTestId("icon")
        expect(icon).toHaveClass("icon-link")

        // fireEvent.click(icon)
        // gostaria de testar se a store mudou de true para false no appears desapears

    })



})
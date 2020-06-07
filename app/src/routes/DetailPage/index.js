import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSelectedSize } from '../../actions/products'

import ErrorBoundary from '../../containers/ErrorBoundary'
import Header from '../../containers/Header';
import Search from '../../containers/Search';
import ShoppingCart from '../../containers/ShoppingCart'

import { Detail } from '../../containers/Detail'

export function DetailPage() {
	const product = useSelector(state => state.products?.productDetail)
	const searchAppears = useSelector(state => state.search?.searchAppears)
	const { shoppingCartAppears, allItensInShoppingCart } = useSelector(state => state.shoppingCart)
	const dispatch = useDispatch()

	useEffect(() => {
		const estadoComoString = JSON.stringify(allItensInShoppingCart)
		localStorage.setItem('carrinho', estadoComoString)
	})

	useEffect(() => {
		return () => dispatch(setSelectedSize(""))
	}, [dispatch])

	return (
		<ErrorBoundary>
			<Header />

			{product && <Detail />}

			{shoppingCartAppears &&
				<ShoppingCart data-testid="shop-appears" />}

			{searchAppears &&
				<Search data-testid="search-appears" className="search-appears" />}

		</ErrorBoundary>
	)
}


export default DetailPage


// // TESTE
// import React from "react";
// import { render } from "@testing-library/react"
// import { DetailPage } from "./index"
// import { products } from "../../utils/mock"

// const mockProduct = {...products[4]}

// describe("DetailPage", () => {
//     let getByTestId
//     beforeEach(() => {
//         const view = render(<DetailPage product={mockProduct}/>)
//         getByTestId = view.getByTestId
//     })

//     it("should render ErrorBoundary correctly", async () => {
//         const erro = getByTestId("erro")        
//         expect(erro).toHaveClass("erro")
//     })

// })
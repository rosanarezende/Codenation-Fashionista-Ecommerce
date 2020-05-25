import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { routes } from '../../utils/constants'
import { push } from 'connected-react-router'

import { setSelectedSize } from '../../actions/products'
import { addProductToCart } from "../../actions/shoppingCart"

import './index.css'

import ErrorBoundary from '../../containers/ErrorBoundary'
import Header from '../../containers/Header';
import Search from '../../containers/Search';
import ShoppingCart from '../../containers/ShoppingCart'

import DetailImage from '../../components/DetailImage'
import DetailText from '../../components/DetailText'

export function DetailPage(props) {
	const {
		product,
		shoppingCartAppears,
		searchAppears,
		selectedSize,
		setSelectedSize,
		addProductToCart,
		allItensInShoppingCart,
		goToHome
	} = props

	useEffect(() => {
		const estadoComoString = JSON.stringify(allItensInShoppingCart)
		localStorage.setItem('carrinho', estadoComoString)
	})

	// ter um modo de limpar esses detalhes quando eu saio da página

	return (
		<ErrorBoundary>
			<Header />

			{product &&
				<div className="detail" data-testid="detail">
					<DetailImage product={product} />

					<DetailText
						product={product}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
						addProductToCart={addProductToCart}
						goToHome={goToHome}
					/>
				</div>
			}

			{shoppingCartAppears && 
				<ShoppingCart data-testid="shop-appears" />}

			{searchAppears &&
				<Search data-testid="search-appears" className="search-appears" />}
		
		</ErrorBoundary>
	)
}

const mapStateToProps = state => ({
	product: state.products.productDetail,
	shoppingCartAppears: state.shoppingCart.shoppingCartAppears,
	searchAppears: state.search.searchAppears,
	selectedSize: state.products.selectedSize,

	allItensInShoppingCart: state.shoppingCart.allItensInShoppingCart,
})

const mapDispatchToProps = dispatch => ({
	setSelectedSize: (size) => dispatch(setSelectedSize(size)),
	addProductToCart: (product) => dispatch(addProductToCart(product)),
	goToHome: () => dispatch(push(routes.home))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)


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
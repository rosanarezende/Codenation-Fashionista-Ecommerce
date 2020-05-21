import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { setSelectedSize } from '../../actions/products'
import { addProductToCart } from "../../actions/shoppingCart"

import './index.css'

import Header from '../../components/Header'
import Backdrop from '../../components/Backdrop'
import ShoppingCart from '../../components/ShoppingCart'
import Search from '../../components/Search'
import DetailImage from '../../components/DetailImage'
import DetailText from '../../components/DetailText'
import ErrorBoundary from '../ErrorBoundary'

function DetailPage(props) {
	const { 
		product, 
		shoppingCartAppears, 
		searchAppears,
		selectedSize, 
		setSelectedSize, 
		addProductToCart,
		allItensInShoppingCart
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
				<div className="detail">
					<DetailImage product={product} />

					<DetailText
						product={product}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
						addProductToCart={addProductToCart}
					/>
				</div>
			}

			{shoppingCartAppears &&
				<>
					<Backdrop />
					<ShoppingCart />
				</>
			}

			{searchAppears &&
				<>
					<Backdrop />
					<Search />
				</>
			}
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
	addProductToCart: (product) => dispatch(addProductToCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
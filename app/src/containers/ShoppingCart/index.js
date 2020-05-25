import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import './index.css'

import { setShoppingCart, setAllItensInShoppingCart, removeProductFromCart, changeQuantity } from '../../actions/shoppingCart'

import ProductInCart from '../../components/ProductInCart'
import Backdrop from '../../components/Backdrop'

export function ShoppingCart(props) {
	const { setShoppingCart, allItensInShoppingCart, removeProductFromCart, changeQuantity } = props

	useEffect(() => {
		const noEstadodoCarrinho = localStorage.getItem('carrinho')
		const novoEstado = JSON.parse(noEstadodoCarrinho)
		if (novoEstado) {
			setAllItensInShoppingCart(novoEstado)
		}

		const estadoComoString = JSON.stringify(allItensInShoppingCart)
		return () => localStorage.setItem('carrinho', estadoComoString)
	}, [allItensInShoppingCart])

	const shoppingCartAppearsDisappears = () => {
		setShoppingCart(false)
	}

	const subtotal = allItensInShoppingCart.reduce((prevVal, product) => {
		const formattedValue = product.actual_price.toString().substr(3).replace(",", ".")
		return prevVal + (formattedValue * product.quantity)
	}, 0)

	return (
		<>
			<Backdrop />
			<div className="shopping-cart" data-testid="shopping-cart">

				<header className="shopping-cart__header">
					<span className="shopping-cart__icon" onClick={shoppingCartAppearsDisappears}>
						<i className="fa fa-arrow-right" aria-hidden="true"></i>
					</span>

					<h4>Sacola ({allItensInShoppingCart.length}) </h4>
					<div></div>
				</header>

				<main className="shopping-cart__main">

					<div className="shopping-cart__container">
						{allItensInShoppingCart.map((product, index) => (
							<ProductInCart key={index} product={product}
								removeProductFromCart={removeProductFromCart}
								changeQuantity={changeQuantity}
							/>
						))}

					</div>

				</main>

				<footer className="shopping-cart__footer">
					<h4>Subtotal - {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
				</footer>

			</div>
		</>
	)
}

const mapStateToProps = (state) => ({
	allItensInShoppingCart: state.shoppingCart.allItensInShoppingCart,
})

const mapDispatchToProps = dispatch => ({
	setShoppingCart: (appears) => dispatch(setShoppingCart(appears)),
	setAllItensInShoppingCart: (products) => dispatch(setAllItensInShoppingCart(products)),
	removeProductFromCart: (productId) => dispatch(removeProductFromCart(productId)),
	changeQuantity: (information) => dispatch(changeQuantity(information))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
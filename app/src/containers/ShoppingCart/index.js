import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.css'
import { setShoppingCart, setAllItensInShoppingCart } from '../../actions/shoppingCart'
import ProductInCart from '../../components/ProductInCart'
import Backdrop from '../../components/Backdrop'

export function ShoppingCart(props) {
	const allItensInShoppingCart = useSelector(state => state.shoppingCart.allItensInShoppingCart)
	const dispatch = useDispatch()

	useEffect(() => {
		const cartContent = JSON.parse(localStorage.getItem('carrinho'))
		cartContent && setAllItensInShoppingCart(cartContent)

		const stateAsString = JSON.stringify(allItensInShoppingCart)
		localStorage.setItem('carrinho', stateAsString)
	}, [allItensInShoppingCart])

	const shoppingCartAppearsDisappears = () => dispatch(setShoppingCart(false))

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
						{allItensInShoppingCart.length > 0
							? allItensInShoppingCart.map(product => (
								<ProductInCart
									key={product.id}
									product={product}
								/>
							))
							:
							<div className="shopping-cart__empty">
								<h4 className="shopping-cart__empty-text">Sua sacola está vazia :/</h4>
							</div>
						}
					</div>

				</main>

				<footer className="shopping-cart__footer">
					<h4>Subtotal - {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
				</footer>

			</div>
		</>
	)
}

export default ShoppingCart
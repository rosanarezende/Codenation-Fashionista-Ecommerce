import React from 'react'
import { connect } from 'react-redux'

import './index.css'
import * as S from './styles'

import { setShoppingCart, setAllItensInShoppingCart, removeProductFromCart, changeQuantity } from '../../actions/shoppingCart'

import ProductInCart from '../ProductInCart'

class ShoppingCart extends React.Component {

	componentDidMount() {
		const noEstadodoCarrinho = localStorage.getItem('carrinho')
		const novoEstado = JSON.parse(noEstadodoCarrinho)
		if (novoEstado) {
			this.props.setAllItensInShoppingCart(novoEstado)
		}
	}

	// acho que preciso manter por conta do remover
	componentDidUpdate() {
		const estadoComoString = JSON.stringify(this.props.allItensInShoppingCart)
		localStorage.setItem('carrinho', estadoComoString)
	}


	render() {
		const { setShoppingCart, allItensInShoppingCart, removeProductFromCart, changeQuantity } = this.props

		const shoppingCartAppearsDisappears = () => {
			setShoppingCart(false)
		}

		const subtotal = allItensInShoppingCart.reduce((prevVal, product) => {
			const formattedValue = product.actual_price.toString().substr(3).replace(",", ".")
			return prevVal + (formattedValue * product.quantity)
		}, 0)

		return (
			<S.ShoppingCartWrapper>

				<S.ShoppingCartHeader>
					<S.IconLink href='#' onClick={shoppingCartAppearsDisappears}>
						<i className="fa fa-arrow-right" aria-hidden="true"></i>
					</S.IconLink>

					<h4>Sacola ({allItensInShoppingCart.length}) </h4>
					<div></div>
				</S.ShoppingCartHeader>

				<S.ShoppingCartMain>

					<S.MainContainer>
						{allItensInShoppingCart.map((product, index) => (
							<ProductInCart key={index} product={product} 
								removeProductFromCart={removeProductFromCart} 
								changeQuantity={changeQuantity}
							/>
						))}

					</S.MainContainer>

				</S.ShoppingCartMain>

				<S.ShoppingCartFooter>
					<h4>Subtotal - {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
				</S.ShoppingCartFooter>

			</S.ShoppingCartWrapper>
		)
	}
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
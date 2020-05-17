import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setSelectedSize } from '../../actions/products'
import { addProductToCart } from "../../actions/shoppingCart"

import * as S from './styles'

import Header from '../../components/Header'
import Backdrop from '../../components/Backdrop'
import ShoppingCart from '../../components/ShoppingCart'
import Search from '../../components/Search'

function DetailPage(props) {
	const { product, shoppingCartAppears, searchAppears,
		selectedSize, setSelectedSize, addProductToCart,
		allItensInShoppingCart
	} = props

	const [msgAppears, setMsgAppears] = useState(false)

	useEffect(() => {
		const estadoComoString = JSON.stringify(allItensInShoppingCart)
		localStorage.setItem('carrinho', estadoComoString)
	})

	// ter um modo de limpar esses detalhes quando eu saio da página

	function onClickSize(sku) {
		setSelectedSize(sku)
		setMsgAppears(false)
	}

	function addToCart() {
		if (selectedSize === "") {
			setMsgAppears(true)
		} else {
			const sizeFiltered = product.sizes.filter(size => size.sku === selectedSize)
			const size = sizeFiltered[0] && sizeFiltered[0].size
			const productGoToCart = {
				id: new Date().getTime(),
				image: product.image,
				name: product.name,
				actual_price: product.actual_price,
				installments: product.installments,
				size: size,
				quantity: 1
			}
			addProductToCart(productGoToCart)
			setSelectedSize("")
		}
	}

	return (
		<>
			<Header />

			{product &&
				<S.DetailPageWrapper>

					<S.ImageCard>
						{product.image !== ""
							? <S.Image src={product.image} alt={product.name} />
							: <S.Image src="https://user-images.githubusercontent.com/45580434/82130318-beceb200-97a0-11ea-82c3-38364a71136a.png" alt={product.name} />
						}

						{product.on_sale &&
							<S.Stamp>{product.discount_percentage}</S.Stamp>
						}
					</S.ImageCard>

					<S.TextWrapper>

						<h3>{product.name}</h3>
						<span>
							{product.on_sale &&
								<S.BeforePrice>{product.regular_price}</S.BeforePrice>
							}
							<span>{product.actual_price}</span> <S.Installments>em até {product.installments}</S.Installments>
						</span>

						<S.SizeWrapper>
							<S.TitleGrey>Escolha o tamanho</S.TitleGrey>

							{msgAppears &&
								<S.SecretText>É necessário escolher um tamanho!</S.SecretText>
							}

							{product.sizes.length > 0 &&
								product.sizes
									.filter(item => item.available === true)
									.map(information => {
										return information.sku === selectedSize
											?
											<S.SizeButtonBlack
												key={information.sku}
												onClick={() => onClickSize(information.sku)}
											>
												{information.size}
											</S.SizeButtonBlack>
											:
											<S.SizeButton
												key={information.sku}
												onClick={() => onClickSize(information.sku)}
											>
												{information.size}
											</S.SizeButton>
									})}
						</S.SizeWrapper>

						<S.AddButton
							onClick={addToCart}
						>
							Adicionar à Sacola
						</S.AddButton>

					</S.TextWrapper>

				</S.DetailPageWrapper>
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
		</>
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
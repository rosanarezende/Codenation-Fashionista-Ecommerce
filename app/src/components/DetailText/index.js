import React, { useState } from 'react'
import * as S from './styles'

function DetailText(props) {

	const { 
		product, 
		selectedSize, 
		setSelectedSize, 
		addProductToCart 
	} = props

	const [msgAppears, setMsgAppears] = useState(false)

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

			<S.AddButton onClick={addToCart}>
				Adicionar à Sacola
			</S.AddButton>

		</S.TextWrapper>
	)
}

export default DetailText
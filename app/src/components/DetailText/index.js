import React, { useState } from 'react'
import * as S from './styles'
import './index.css'

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
		<div className="detail__right">

			<h3>{product.name}</h3>
			<span>
				{product.on_sale &&
					<span className="detail__regularprice">{product.regular_price}</span>
				}
				<span>{product.actual_price}</span> <span
					className="detail__installments">em até {product.installments}</span>
			</span>

			<div className="detail__sizewrapper">
				<p className="detail__titlegrey">Escolha o tamanho</p>

				{msgAppears &&
					<p className="detail__secrettext">É necessário escolher um tamanho!</p>
				}

				{product.sizes.length > 0 &&
					product.sizes
						.filter(item => item.available === true)
						.map(information => {
							return information.sku === selectedSize
								?
								<button
									className="detail__sizebutton--black"
									key={information.sku}
									onClick={() => onClickSize(information.sku)}
								>
									{information.size}
								</button>
								:
								<button
									className="detail__sizebutton"
									key={information.sku}
									onClick={() => onClickSize(information.sku)}
								>
									{information.size}
								</button>
						})}
			</div>

			<button className="detail__addbutton" onClick={addToCart}>
				Adicionar à Sacola
			</button>

		</div>
	)
}

export default DetailText
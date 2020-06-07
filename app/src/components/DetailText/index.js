import React, { useState } from 'react'
import './index.css'

import { useSelector, useDispatch } from 'react-redux'

import { setSelectedSize } from '../../actions/products'
import { addProductToCart } from "../../actions/shoppingCart"

import Button from '../Button'

function DetailText() {
	const [msgAppears, setMsgAppears] = useState(false)
	const [msg2Appears, setMsg2Appears] = useState(false)
	const product = useSelector(state => state.products?.productDetail)
	const selectedSize = useSelector(state => state.products?.selectedSize)	
    const dispatch = useDispatch()

	function onClickSize(sku) {
		dispatch(setSelectedSize(sku))
		setMsgAppears(false)
		setMsg2Appears(false)
	}

	async function addToCart() {
		if (selectedSize === "") {
			setMsgAppears(true)
			setMsg2Appears(false)
		} else {
			const sizeFiltered = product.sizes?.filter(size => size.sku === selectedSize)
			const size = sizeFiltered[0] && sizeFiltered[0].size
			const productGoToCart = {
				id: new Date().getTime(),
				image: product?.image,
				name: product?.name,
				actual_price: product?.actual_price,
				installments: product?.installments,
				size: size,
				quantity: 1
			}
			await dispatch(addProductToCart(productGoToCart))
			dispatch(setSelectedSize(""))
			setMsg2Appears(true)
		}
	}

	return (
		<div className="detail__right" data-testid="detail-text">

			<h3>{product?.name}</h3>
			<span>
				{product?.on_sale &&
					<span className="detail__regular-price">{product?.regular_price}</span>
				}
				<span>{product?.actual_price}</span> <span
					className="detail__installments">em até {product?.installments}</span>
			</span>

			<div className="detail__size-wrapper">
				<p className="detail__title-grey">Escolha o tamanho</p>

				{msgAppears &&
					<p className="detail__secret-text">É necessário escolher um tamanho!</p>
				}

				{product?.sizes?.length > 0 &&
					product?.sizes
						.filter(item => item.available === true)
						.map(information => {
							return information.sku === selectedSize
								?
								<Button black
									key={information.sku}
									text={information.size}
								/>
								:
								<Button
									key={information.sku}
									onClickFunctionWhithParam={onClickSize}
									clickParam={information.sku}
									text={information.size}
								/>
						})}
			</div>

			{msg2Appears &&
				<p className="detail__add-product">
					Produto adicionado ao carrinho!
				</p>
			}

			<Button add
				onClickFunction={addToCart}
				text="Adicionar à Sacola"
			/>

		</div>
	)
}

export default DetailText
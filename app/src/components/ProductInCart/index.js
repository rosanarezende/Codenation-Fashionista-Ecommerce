import React from 'react'

import './index.css'
import IconButton from '../IconButton'

function ProductInCart(props) {
	const { product, removeProductFromCart, changeQuantity } = props

	const removeItem = (productId) => {
		removeProductFromCart(productId)
	}

	function onClickRemoveQuantity(productId) {
		const information = {
			id: productId,
			option: "remove"
		}
		changeQuantity(information)
	}

	function onClickAddQuantity(productId) {
		const information = {
			id: productId,
			option: "add"
		}
		changeQuantity(information)
	}

	return (
		<div className="product-in-cart" data-testid="product-in-cart">

			<div className="product-in-cart__left">

				<img className="product-in-cart__img"
					src={product.image
						? product.image
						: "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
					}
					alt={product.name}
				/>

				<p className="product-in-cart__remove" 
					onClick={() => removeItem(product.id)}>Remover item</p>

			</div>

			<div className="product-in-cart__center">
				<h5>{product.name.toUpperCase()}</h5>
				<p className="product-in-cart__text-grey">Tam: {product.size}</p>

				<div className="product-in-cart__quantity-container">
					{product.quantity === 1
						?
						<IconButton
							id={product.id}
							simbol={"minus"}
						/>
						:
						<IconButton
							id={product.id}
							simbol={"minus"}
							onClickFunction={onClickRemoveQuantity}
						/>
					}
					
					<span className="product-in-cart__quantity">
						{product.quantity}
					</span>
					
					<IconButton
						id={product.id}
						simbol={"plus"}
						onClickFunction={onClickAddQuantity}
					/>
				</div>

			</div>

			<div className="product-in-cart__right">
				<h5>{product.actual_price}</h5>
				<p className="product-in-cart__text-grey">
					{product.installments}
				</p>
			</div>

		</div>
	)
}

export default ProductInCart


import React from 'react'

import * as S from './styles'

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
		<S.ProductInCartWrapper>

			<S.InternalDivisionLeft>

				{product.image
					?
					<S.Image src={product.image} alt={product.name} />
					:
					<S.Image src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel" alt={product.name} />
				}

				<S.Remove onClick={() => removeItem(product.id)}>Remover item</S.Remove>

			</S.InternalDivisionLeft>

			<S.InternalDivisionCenter>
				<h3>{product.name.toUpperCase()}</h3>
				<S.TextGrey>Tam: {product.size}</S.TextGrey>

				<S.QuantityContainer>
					{product.quantity === 1
						?
						<S.Button>
							<i className="fa fa-minus" aria-hidden="true"></i>
						</S.Button>
						:
						<S.Button onClick={() => onClickRemoveQuantity(product.id)}>
							<i className="fa fa-minus" aria-hidden="true"></i>
						</S.Button>
					}
					
					<S.Quantity>{product.quantity}</S.Quantity>
					
					<S.Button onClick={() => onClickAddQuantity(product.id)}>
						<i className="fa fa-plus" aria-hidden="true"></i>
					</S.Button>
				</S.QuantityContainer>

			</S.InternalDivisionCenter>

			<S.InternalDivisionRigth>
				<h3>{product.actual_price}</h3>
				<S.TextGrey>{product.installments}</S.TextGrey>

			</S.InternalDivisionRigth>

		</S.ProductInCartWrapper>
	)
}

export default ProductInCart


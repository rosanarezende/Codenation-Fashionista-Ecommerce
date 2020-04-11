import React from 'react'
import * as S from './styles'

function ProductInCart(props){
    const { product } = props

    const removeItem = (productId) => {
        alert(`Remover produto ${productId}`)
    }

    const productValueParcel = (product.value / 3 ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return(
        <S.ProductInCartWrapper>
            
            <S.InternalDivisionLeft>

                <S.Image src={product.image} alt={product.name}/>
                <S.Remove onClick={() => removeItem(product.id)}>Remover item</S.Remove>

            </S.InternalDivisionLeft>

            <S.InternalDivisionCenter>
                <h3>{product.name.toUpperCase()}</h3>
                <S.TextGrey>Tam: {product.size}</S.TextGrey>

                <S.Quantity>
                    <S.Button>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </S.Button>
                    {product.quantity}
                    <S.Button>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </S.Button>
                </S.Quantity>
                
            </S.InternalDivisionCenter>

            <S.InternalDivisionRigth>
                <h3>{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                <S.TextGrey> 3x {(product.value / 3).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.TextGrey>
                
            </S.InternalDivisionRigth>
            
        </S.ProductInCartWrapper>
    )
}

export default ProductInCart


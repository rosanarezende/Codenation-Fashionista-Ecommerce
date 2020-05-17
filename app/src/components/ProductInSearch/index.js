import React from 'react'
import * as S from './styles'

function ProductInSearch(props){
    const { product } = props

    return(
        <S.ProductInSearchWrapper>
            
            <S.InternalDivisionLeft>
                {product.image !== ""
                    ? <S.Image src={product.image} alt={product.name} />
                    : <S.Image src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel" alt={product.name} />
                }
            </S.InternalDivisionLeft>

            <S.InternalDivisionCenter>
                <h3>{product.name.toUpperCase()}</h3>
            </S.InternalDivisionCenter>

            <S.InternalDivisionRigth>
                <h3>{product.regular_price}</h3>
                <S.TextGrey>{product.installments}</S.TextGrey>
            </S.InternalDivisionRigth>
            
        </S.ProductInSearchWrapper>
    )
}

export default ProductInSearch


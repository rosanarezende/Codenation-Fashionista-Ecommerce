import React from 'react'
import * as S from './styles'

function ProductInSearch(props){
    const { product } = props

    return(
        <S.ProductInSearchWrapper>
            
            <S.InternalDivisionLeft>
                <S.Image src={product.image} alt={product.name}/>
            </S.InternalDivisionLeft>

            <S.InternalDivisionCenter>
                <h3>{product.name.toUpperCase()}</h3>
            </S.InternalDivisionCenter>

            <S.InternalDivisionRigth>
                <h3>{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                <S.TextGrey> 3x {(product.value / 3).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.TextGrey>
            </S.InternalDivisionRigth>
            
        </S.ProductInSearchWrapper>
    )
}

export default ProductInSearch


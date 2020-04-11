import React from 'react'
import * as S from './styles'

function Product(props) {

    const { product } = props

    const openProductDetail = (productName) => {
        alert(`Detalhe de ${productName}`)
    }

    return (
        <S.ProductCard onClick={() => openProductDetail(product.name)}>
            <S.Image src={product.image} alt={product.name} />
            <div>
                <h3>{product.name.toUpperCase()}</h3>
                <p>{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
        </S.ProductCard>
    )
}

export default Product
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
            { product.status && 
                <S.Stamp>
                    {product.stamp * 100}%
                </S.Stamp>
            }

            <div>
                <h3>{product.name.toUpperCase()}</h3>
                <S.Price>
                    { product.status && 
                        <S.BeforePrice>{(product.value * ( 1 - product.stamp)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.BeforePrice>
                    }
                    <span>{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </S.Price>
            </div>
        </S.ProductCard>
    )
}

export default Product
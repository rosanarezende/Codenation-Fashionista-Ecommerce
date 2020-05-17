import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../../utils/constants"

import { setProductDetail } from '../../actions/products'

import * as S from './styles'

function Product(props) {

    const { product, goToDetail, setProductDetail } = props

    const openProductDetail = async (product) => {
        await setProductDetail(product)
        goToDetail()
    }

    return (
        <S.ProductCard onClick={() => openProductDetail(product)}>

            {product.image !== ""
                ? <S.Image src={product.image} alt={product.name} />
                : <S.Image src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel" alt={product.name} />
            }

            {product.on_sale &&
                <S.Stamp>{product.discount_percentage}</S.Stamp>
            }

            <div>
                <h3>{product.name}</h3>
                <S.Price>
                    {product.on_sale &&
                        <S.BeforePrice>{product.regular_price}</S.BeforePrice>
                    }
                    <span>{product.actual_price}</span>
                </S.Price>
            </div>
        </S.ProductCard>
    )
}

const mapDispatchToProps = dispatch => ({
    goToDetail: () => dispatch(push(routes.detail)),
    setProductDetail: (product) => dispatch(setProductDetail(product))
})

export default connect(null, mapDispatchToProps)(Product)
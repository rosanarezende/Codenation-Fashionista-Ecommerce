import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../../utils/constants"

import { setProductDetail } from '../../actions/products'

import './index.css'

export function Product(props) {

    const { product, goToDetail, setProductDetail } = props

    const openProductDetail = async (product) => {
        await setProductDetail(product)
        goToDetail()
    }

    return (
        <div className="product" data-testid="product"
            onClick={() => openProductDetail(product)}>

            <img className="product__img"
                src={product.image !== ""
                    ? product.image
                    : "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
                }
                alt={product.name}
            />

            {product.on_sale &&
                <div className="product__stamp">{product.discount_percentage}</div>
            }

            <div>
                <h3>{product.name}</h3>
                <div className="product__price">
                    {product.on_sale &&
                        <span className="product__before-price">{product.regular_price}</span>
                    }
                    <span>{product.actual_price}</span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    goToDetail: () => dispatch(push(routes.detail)),
    setProductDetail: (product) => dispatch(setProductDetail(product))
})

export default connect(null, mapDispatchToProps)(Product)
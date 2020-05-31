import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../../utils/constants"
import { setProductDetail } from '../../actions/products'
import './index.css'

export function Product(props) {
    const { product } = props
    const dispatch = useDispatch()
    const goToDetail = push(routes.detail)

    const openProductDetail = async (product) => {
        await dispatch(setProductDetail(product))
        dispatch(goToDetail)
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
                <figcaption className="product__figcaption">
                    CLIQUE PARA VER MAIS DETALHES
                </figcaption>

            {product.on_sale &&
                <div className="product__stamp">{product.discount_percentage}</div>
            }

            <div>
                <h4>{product.name}</h4>
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

export default Product
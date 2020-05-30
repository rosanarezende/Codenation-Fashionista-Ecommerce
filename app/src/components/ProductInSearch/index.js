import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../../utils/constants'
import './index.css'
import { setProductDetail } from '../../actions/products'
import { setSearch } from '../../actions/search'

function ProductInSearch(props){
    const { product } = props
    const dispatch = useDispatch()
    const goToDetail = push(routes.detail)

    const openProductDetail = async (product) => {
        await dispatch(setProductDetail(product))
        dispatch(goToDetail)
        dispatch(setSearch(false))
    }

    return(
        <div className="product-in-search" data-testid="product-in-search" 
            onClick={() => openProductDetail(product)}>
            
            <div className="product-in-search__left">
                {product.image !== ""
                    ? <img className="product-in-search__img" 
                        src={product.image} alt={product.name} />
                    : <img className="product-in-search__img" 
                        src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel" 
                        alt={product.name} />
                }
            </div>

            <div className="product-in-search__center">
                <h5>{product.name.toUpperCase()}</h5>
            </div>

            <div className="product-in-search__right">
                <h5>{product.actual_price}</h5>
                <p className="product-in-search__text-grey">
                    {product.installments}
                </p>
            </div>
            
        </div>
    )
}

export default ProductInSearch


import React from 'react'

import './index.css'

function ProductInSearch(props){
    const { product } = props

    return(
        <div className="product-in-search">
            
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
                <h3>{product.name.toUpperCase()}</h3>
            </div>

            <div className="product-in-search__right">
                <h3>{product.regular_price}</h3>
                <p className="product-in-search__text-grey">
                    {product.installments}
                </p>
            </div>
            
        </div>
    )
}

export default ProductInSearch


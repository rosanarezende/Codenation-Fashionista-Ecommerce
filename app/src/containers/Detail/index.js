import React from 'react'

import './index.css'

import DetailImage from '../../components/DetailImage'
import DetailText from '../../components/DetailText'

export function Detail(props) {
    const {
        product,
        selectedSize,
        setSelectedSize,
        addProductToCart
    } = props

    return (
        <div className="detail" data-testid="detail">
            <DetailImage product={product} />

            <DetailText
                product={product}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                addProductToCart={addProductToCart}
            />
        </div>
    )
}

export default Detail


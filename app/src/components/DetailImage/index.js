import React from 'react'
// import * as S from './styles'
import './index.css'

function DetailImage(props) {
    const { product } = props

    return (
        <div className="detail__left">
            {product.image !== ""
                ? <img className="detail__image" src={product.image} alt={product.name} />
                : <img className="detail__image" src="https://user-images.githubusercontent.com/45580434/82130318-beceb200-97a0-11ea-82c3-38364a71136a.png" alt={product.name} />
            }

            {product.on_sale &&
                <div className="detail__stamp">{product.discount_percentage}</div>
            }
        </div>
    )
}

export default DetailImage
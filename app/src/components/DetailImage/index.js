import React from 'react'
import * as S from './styles'

function DetailImage(props) {
    const { product } = props

    return (
        <S.ImageCard>
            {product.image !== ""
                ? <S.Image src={product.image} alt={product.name} />
                : <S.Image src="https://user-images.githubusercontent.com/45580434/82130318-beceb200-97a0-11ea-82c3-38364a71136a.png" alt={product.name} />
            }

            {product.on_sale &&
                <S.Stamp>{product.discount_percentage}</S.Stamp>
            }
        </S.ImageCard>
    )
}

export default DetailImage
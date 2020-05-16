import React from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import Header from '../../components/Header'

function DetailPage(props) {
    const { product } = props

    return (
        <>
            <Header />

            <S.DetailPageWrapper>
                {product.image !== ""
                    ? <img src={product.image} alt={product.name} />
                    : <img src="https://user-images.githubusercontent.com/45580434/82130318-beceb200-97a0-11ea-82c3-38364a71136a.png" alt={product.name} />
                }

                {product.on_sale &&
                    <span>{product.discount_percentage}</span>
                }

                <div>
                    <h3>{product.name}</h3>
                    <span>
                        {product.on_sale &&
                            <span>{product.actual_price}</span>
                        }
                        <span>{product.regular_price}</span>
                    </span>
                </div>
            </S.DetailPageWrapper>
        </>
    )
}

const mapStateToProps = state => ({
    product: state.products.productDetail
})

export default connect(mapStateToProps)(DetailPage)
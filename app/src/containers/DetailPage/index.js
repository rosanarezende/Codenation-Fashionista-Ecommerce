import React from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import Header from '../../components/Header'
import Backdrop from '../../components/Backdrop'
import ShoppingCart from '../../components/ShoppingCart'
import Search from '../../components/Search'

function DetailPage(props) {
    const { product, shoppingCartAppears, searchAppears } = props

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

            {shoppingCartAppears &&
                <>
                    <Backdrop/>
                    <ShoppingCart />
                </>
            }

            { searchAppears &&
                <>
                    <Backdrop/>
                    <Search/>
                </>
            }
        </>
    )
}

const mapStateToProps = state => ({
    product: state.products.productDetail,
    shoppingCartAppears: state.shoppingCart.shoppingCartAppears,
    searchAppears: state.search.searchAppears
})

export default connect(mapStateToProps)(DetailPage)
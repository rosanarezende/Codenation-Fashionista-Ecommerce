import React from 'react'
import { connect } from 'react-redux'
import * as S from './styles'

import { setShoppingCart } from '../../actions/shoppingCart'

import ProductInCart from '../ProductInCart'

function ShoppingCart(props) {

    const { setShoppingCart } = props

    const shoppingCartAppearsDisappears = () => {
        setShoppingCart(false)
    }

    const listShoopingCart = [
        {
            id: 1,
            image: "https://user-images.githubusercontent.com/45580434/79032512-93dbb780-7b7d-11ea-90e0-660875a7e39e.png",
            name: "Vestido Transpasse Bow",
            value: 199.9,
            size: 40,
            quantity: 1
        },
        {
            id: 2,
            image: "https://user-images.githubusercontent.com/45580434/79032515-96d6a800-7b7d-11ea-8165-4eccc412c144.png",
            name: "Regata Alcinha Folk",
            value: 99.9,
            size: 40,
            quantity: 1
        },
        {
            id: 3,
            image: "https://user-images.githubusercontent.com/45580434/79032517-98a06b80-7b7d-11ea-81a6-b4fe410cc400.png",
            name: "Top Croped Suede",
            value: 129.9,
            size: 40,
            quantity: 2
        },
    ]

    const subtotal = listShoopingCart.reduce( (prevVal, product) => 
        prevVal + (product.value * product.quantity), 0
    )

    return (
        <S.ShoppingCartWrapper>

            <S.ShoppingCartHeader>
                <S.IconLink href='#' onClick={shoppingCartAppearsDisappears}>
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </S.IconLink>
                
                <h4>Sacola ({listShoopingCart.length}) </h4>
                <div></div>
            </S.ShoppingCartHeader>

            <S.ShoppingCartMain>

                {listShoopingCart.map(product => (
                    <ProductInCart key={product.id} product={product} />
                ))}

            </S.ShoppingCartMain>

            <S.ShoppingCartFooter>
                <h4>Subtotal - {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
            </S.ShoppingCartFooter>

        </S.ShoppingCartWrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    setShoppingCart: (appears) => dispatch(setShoppingCart(appears))
})

export default connect(null, mapDispatchToProps)(ShoppingCart)
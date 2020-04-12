import React from 'react'
import { connect } from 'react-redux'
import * as S from './styles'

import { setShoppingCart } from '../../actions/shoppingCart'

import ProductInCart from '../ProductInCart'

function ShoppingCart(props) {

    const { setShoppingCart, allItensInShoppingCart } = props

    const shoppingCartAppearsDisappears = () => {
        setShoppingCart(false)
    }
   
    const subtotal = allItensInShoppingCart.reduce( (prevVal, product) => 
        prevVal + (product.value * product.quantity), 0
    )

    return (
        <S.ShoppingCartWrapper>

            <S.ShoppingCartHeader>
                <S.IconLink href='#' onClick={shoppingCartAppearsDisappears}>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </S.IconLink>
                
                <h4>Sacola ({allItensInShoppingCart.length}) </h4>
                <div></div>
            </S.ShoppingCartHeader>

            <S.ShoppingCartMain>

                <S.MainContainer>
                    {allItensInShoppingCart.map(product => (
                        <ProductInCart key={product.id} product={product} />
                    ))}

                </S.MainContainer>

            </S.ShoppingCartMain>

            <S.ShoppingCartFooter>
                <h4>Subtotal - {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
            </S.ShoppingCartFooter>

        </S.ShoppingCartWrapper>
    )
}

const mapStateToProps = (state) => ({
    allItensInShoppingCart: state.shoppingCart.allItensInShoppingCart,
  })

const mapDispatchToProps = dispatch => ({
    setShoppingCart: (appears) => dispatch(setShoppingCart(appears))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
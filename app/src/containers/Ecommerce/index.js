import React from 'react'
import { connect } from 'react-redux'

import Header from '../Header';
import Main from '../Main';
import ShoppingCart from '../../components/ShoppingCart/index.js';

import * as S from './styles'

function Ecommerce(props) {

    const { shoppingCartAppears } = props

    return (
        <S.EcommerceWrapper>
            <div>
                <Header />
                <Main />
            </div>
            {shoppingCartAppears && <ShoppingCart />}
        </S.EcommerceWrapper>
    );
}

const mapStateToProps = (state) => ({
    shoppingCartAppears: state.shoppingCart.shoppingCartAppears
})

export default connect(mapStateToProps)(Ecommerce);
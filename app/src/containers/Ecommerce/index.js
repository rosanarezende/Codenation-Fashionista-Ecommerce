import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header';
import Main from '../../components/Main';
import ShoppingCart from '../../components/ShoppingCart/index.js';

function Ecommerce(props) {

    const { shoppingCartAppears } = props

    return (
        <>
            <Header />
            <Main />
            {shoppingCartAppears && <ShoppingCart />}
        </>
    );
}

const mapStateToProps = (state) => ({
    shoppingCartAppears: state.shoppingCart.shoppingCartAppears
})

export default connect(mapStateToProps)(Ecommerce);
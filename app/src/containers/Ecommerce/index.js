import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header';
import Main from '../../components/Main';
import ShoppingCart from '../../components/ShoppingCart/index.js';
import Backdrop from '../../components/Backdrop';


function Ecommerce(props) {

    const { shoppingCartAppears } = props

    return (
        <>
            <Header />
            <Main />
            {shoppingCartAppears &&
                <>
                    <Backdrop/>
                    <ShoppingCart />
                </>
            }
        </>
    );
}

const mapStateToProps = (state) => ({
    shoppingCartAppears: state.shoppingCart.shoppingCartAppears
})

export default connect(mapStateToProps)(Ecommerce);
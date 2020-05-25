import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header';
import Main from '../../components/Main';
import ShoppingCart from '../../components/ShoppingCart/index.js';
import Search from '../../components/Search';
import ErrorBoundary from '../ErrorBoundary';

function HomePage(props) {

    const { shoppingCartAppears, searchAppears } = props

    return (
        <ErrorBoundary>
            <Header />
            <Main />
            {shoppingCartAppears && <ShoppingCart />}
            { searchAppears && <Search/>}
        </ErrorBoundary>
    );
}

const mapStateToProps = (state) => ({
    shoppingCartAppears: state.shoppingCart.shoppingCartAppears,
    searchAppears: state.search.searchAppears
})

export default connect(mapStateToProps)(HomePage);
import React from 'react'
import { connect } from 'react-redux'

import ErrorBoundary from '../../containers/ErrorBoundary'
import Header from '../../containers/Header';
import Main from '../../containers/Main';
import Search from '../../containers/Search';
import ShoppingCart from '../../containers/ShoppingCart/index.js';

function HomePage(props) {

    const { shoppingCartAppears, searchAppears } = props

    return (
        <ErrorBoundary>
            <Header />
            <Main />
            {shoppingCartAppears && <ShoppingCart />}
            {searchAppears && <Search />}
        </ErrorBoundary>
    );
}

const mapStateToProps = (state) => ({
    shoppingCartAppears: state.shoppingCart.shoppingCartAppears,
    searchAppears: state.search.searchAppears
})

export default connect(mapStateToProps)(HomePage);
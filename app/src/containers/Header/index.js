import React from 'react';
import { connect } from 'react-redux'

import { setShoppingCart } from '../../actions/shoppingCart'
import { HeaderWrapper, IconLink } from './styles.js'

function Header(props) {
  const {setShoppingCart, shoppingCartAppears} = props

  const shoppingCartAppearsDisappears = () => {
    setShoppingCart(!shoppingCartAppears)
  }

  return (
    <HeaderWrapper>
      <h1>FASHONISTA</h1>

      <div>
          <IconLink href='#'>
            <i className="fa fa-search" aria-hidden="true"></i>
          </IconLink>
          <IconLink href='#' onClick={shoppingCartAppearsDisappears}>
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </IconLink>
      </div>
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => ({
  shoppingCartAppears: state.shoppingCart.shoppingCartAppears
})

const mapDispatchToProps = dispatch => ({
  setShoppingCart: (appears) => dispatch(setShoppingCart(appears))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
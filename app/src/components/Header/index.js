import React from 'react';
import { connect } from 'react-redux'

import { setShoppingCart } from '../../actions/shoppingCart'
import * as S from './styles.js'

function Header(props) {
  const {setShoppingCart, allItensInShoppingCart } = props

  const shoppingCartAppearsDisappears = () => {
    setShoppingCart(true)
  }

  return (
    <S.HeaderWrapper>
      <h1>FASHONISTA</h1>

      <div>
          <S.IconSearch href='#'>
            <i className="fa fa-search" aria-hidden="true"></i>
          </S.IconSearch>
          <S.IconCart href='#' onClick={shoppingCartAppearsDisappears}>
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <S.Badge>{allItensInShoppingCart.length}</S.Badge>
          </S.IconCart>
      </div>
    </S.HeaderWrapper>
  );
}

const mapStateToProps = (state) => ({
  allItensInShoppingCart: state.shoppingCart.allItensInShoppingCart,
})

const mapDispatchToProps = dispatch => ({
  setShoppingCart: (appears) => dispatch(setShoppingCart(appears))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
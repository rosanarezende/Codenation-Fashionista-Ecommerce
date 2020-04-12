import React from 'react';
import { connect } from 'react-redux'

import { setShoppingCart } from '../../actions/shoppingCart'
import { setSearch } from '../../actions/search'

import * as S from './styles.js'

function Header(props) {
  const {setShoppingCart, setSearch, allItensInShoppingCart } = props

  const shoppingCartAppearsDisappears = () => {
    setShoppingCart(true)
  }
  const searchAppearsDisappears = () => {
    setSearch(true)
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderNavbar>
        <h1>FASHONISTA</h1>

        <div>
            <S.IconSearch href='#' onClick={searchAppearsDisappears}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </S.IconSearch>
            <S.IconCart href='#' onClick={shoppingCartAppearsDisappears}>
              <i className="fa fa-shopping-basket" aria-hidden="true"></i>
              <S.Badge>{allItensInShoppingCart.length}</S.Badge>
            </S.IconCart>
        </div>
      </S.HeaderNavbar>
    </S.HeaderWrapper>
  );
}

const mapStateToProps = (state) => ({
  allItensInShoppingCart: state.shoppingCart.allItensInShoppingCart,
})

const mapDispatchToProps = dispatch => ({
  setShoppingCart: (appears) => dispatch(setShoppingCart(appears)),
  setSearch: (appears) => dispatch(setSearch(appears))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
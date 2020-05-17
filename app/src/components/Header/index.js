import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../../utils/constants"

import { setShoppingCart, setAllItensInShoppingCart } from '../../actions/shoppingCart'
import { setSearch } from '../../actions/search'


import * as S from './styles.js'

function Header(props) {
  const {setShoppingCart, setSearch, allItensInShoppingCart, goToHome, setAllItensInShoppingCart } = props

  useEffect(() => {   
      const noEstadodoCarrinho = localStorage.getItem('carrinho')
      const novoEstado = JSON.parse(noEstadodoCarrinho)
      if (novoEstado) {
        setAllItensInShoppingCart(novoEstado)
      }
  }, [setAllItensInShoppingCart])

  const shoppingCartAppearsDisappears = () => {
    setShoppingCart(true)
  }
  const searchAppearsDisappears = () => {
    setSearch(true)
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderNavbar>
        <h1
          onClick={() => goToHome()}
        >FASHONISTA</h1>

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
  setSearch: (appears) => dispatch(setSearch(appears)),
  goToHome: () => dispatch(push(routes.home)),
  setAllItensInShoppingCart: (products) => dispatch(setAllItensInShoppingCart(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
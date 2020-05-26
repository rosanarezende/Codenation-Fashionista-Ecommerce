import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../../utils/constants"

import { setShoppingCart, setAllItensInShoppingCart } from '../../actions/shoppingCart'
import { setSearch } from '../../actions/search'

import './index.css'

export function Header(props) {
  const {setShoppingCart, setSearch, allItensInShoppingCart, goToHome, setAllItensInShoppingCart } = props

  useEffect(() => {   
      const noEstadodoCarrinho = localStorage.getItem('carrinho')
      const novoEstado = JSON.parse(noEstadodoCarrinho)
      if (novoEstado) {
        setAllItensInShoppingCart(novoEstado)
      }
  }, [setAllItensInShoppingCart])

  const shoppingCartAppearsDisappears = () => setShoppingCart(true)
  const searchAppearsDisappears = () => setSearch(true)
  
  return (
    <header className="header" data-testid="header">
      <nav className="header__navbar">
        <h1 className="header__title" onClick={() => goToHome()} >FASHONISTA</h1>

        <div>
            <span className="header__icon" onClick={searchAppearsDisappears}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <span className="header__icon header__icon--cart" onClick={shoppingCartAppearsDisappears}>
              <i className="fa fa-shopping-basket" aria-hidden="true"></i>
              <span className="header__badge">{allItensInShoppingCart?.length}</span>
            </span>
        </div>
      </nav>
    </header>
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
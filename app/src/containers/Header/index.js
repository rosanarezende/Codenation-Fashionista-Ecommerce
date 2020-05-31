import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../../utils/constants"
import { setShoppingCart, setAllItensInShoppingCart } from '../../actions/shoppingCart'
import { setSearch } from '../../actions/search'
import './index.css'

export function Header() {
  const allItensInShoppingCart = useSelector(state => state.shoppingCart?.allItensInShoppingCart)
  const dispatch = useDispatch()

  useEffect(() => {   
      const cartContent = JSON.parse(localStorage.getItem('carrinho'))
		  cartContent && dispatch(setAllItensInShoppingCart(cartContent))
  }, [dispatch])

  const shoppingCartAppearsDisappears = () => dispatch(setShoppingCart(true))
  const searchAppearsDisappears = () => dispatch(setSearch(true))
  
  return (
    <header className="header" data-testid="header">
      <nav className="header__navbar">
        <h1 className="header__title" onClick={() => dispatch(push(routes.home))} >FASHONISTA</h1>

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

export default Header;
import React from 'react';
import { connect } from 'react-redux'

import * as S from './styles.js'

import Product from '../../components/Product/index.js';
import ShoppingCart from '../../components/ShoppingCart/index.js';

function Main(props) {

    const { allProducts, shoppingCartAppears } = props

    return (
        <S.MainWrapper>

            {shoppingCartAppears && <ShoppingCart/>}
            
            <S.ProductsContent>

                <S.Quantity>
                    {allProducts.length} itens
                </S.Quantity>

                <S.ProductsGrid>
                    {allProducts.map(product => (
                        <Product product={product} key={product.id} />
                    ))}
                </S.ProductsGrid>

            </S.ProductsContent>

        </S.MainWrapper>
    );
}

const mapStateToProps = (state) => ({
    allProducts: state.products.allProducts,
    shoppingCartAppears: state.shoppingCart.shoppingCartAppears
})

export default connect(mapStateToProps)(Main);
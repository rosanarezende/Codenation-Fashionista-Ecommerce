import React from 'react';
import { connect } from 'react-redux'

import * as S from './styles.js'

import Product from '../../components/Product/index.js';

function Main(props) {

    const { allProducts } = props

    return (
        <S.MainWrapper>

            <S.Quantity>
                {allProducts.length} itens
            </S.Quantity>

            <S.ProductsGrid>
                {allProducts.map(product => (
                    <Product product={product} key={product.id}/>
                ))}
            </S.ProductsGrid>

        </S.MainWrapper>
    );
}

const mapStateToProps = (state) => ({
    allProducts: state.products.allProducts
})

export default connect(mapStateToProps)(Main);
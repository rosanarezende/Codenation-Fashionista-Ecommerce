import React from 'react';
import { connect } from 'react-redux'

import * as S from './styles.js'

import Product from '../Product';

function Main(props) {

    const { allProducts } = props

    return (
        <S.MainWrapper>         
            
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
})

export default connect(mapStateToProps)(Main);
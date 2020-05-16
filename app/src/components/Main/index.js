import React, {useEffect} from 'react';
import { connect } from 'react-redux'

import { getProducts } from '../../actions/products'

import * as S from './styles.js'

import Product from '../Product';

function Main(props) {
    const { allProducts, getProducts } = props
    
    useEffect(() => {
        getProducts()
    }, [getProducts])

    return (
        <S.MainWrapper>         
            
            <S.ProductsContent>

                <S.Quantity>
                    {allProducts.length} itens
                </S.Quantity>

                {allProducts.length === 0
                    ? <div>Carregando...</div>
                    :
                    <S.ProductsGrid>
                        {allProducts.map( (product, index) => (
                            <Product product={product} key={index} />
                        ))}
                    </S.ProductsGrid>
                }               

            </S.ProductsContent>

        </S.MainWrapper>
    );
}

const mapStateToProps = (state) => ({
    allProducts: state.products.allProducts,
})

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
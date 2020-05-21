import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { getProducts } from '../../actions/products'

import './index.css'

import Product from '../Product';

function Main(props) {
    const { 
        allProducts, 
        getProducts 
    } = props

    // // testando error boundary
    // const allProducts = "oi"

    useEffect(() => {
        getProducts()
    }, [getProducts])

    return (
        <main className="main">

            <div className="main__containe">

                {allProducts.length > 0 &&
                    <p className="main__text">{allProducts.length} itens</p>
                }

                {allProducts.length === 0
                    ? <div>Carregando...</div>
                    :
                    <div className="main__products-grid">
                        {allProducts.map((product, index) => (
                            <Product product={product} key={index} />
                        ))}
                    </div>
                }

            </div>

        </main>
    );
}

const mapStateToProps = (state) => ({
    allProducts: state.products.allProducts,
})

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { getProducts } from '../../actions/products'
import './index.css'
import Product from '../../components/Product';
import Loading from '../../components/Loading';

export function Main() {
    const allProducts  = useSelector(state => state.products?.allProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <main className="main" data-testid="main">
            <div className="main__container">
                {allProducts?.length > 0 &&
                    <p className="main__text">{allProducts?.length} itens</p>
                }

                {allProducts?.length === 0
                    ? <Loading/>
                    :
                    <div className="main__products-grid">
                        {allProducts?.map((product, index) => (
                            <Product product={product} index={index} key={index} />
                        ))}
                    </div>
                }
            </div>
        </main>
    );
}

export default Main
import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as S from './styles'

import { setSearch } from '../../actions/search'

import ProductInSearch from '../ProductInSearch'

function Search(props) {
    const { setSearch, allProducts } = props
    const [inputSearch, setInputSearch] = useState('')

    let filteredItens = []
    if (inputSearch !== '') {
        filteredItens = allProducts.filter(product =>
            product.name.toLowerCase().includes(inputSearch.toLowerCase())
        )
    }

    const searchAppearsDisappears = () => {
        setSearch(false)
    }

    const handleInputSearch = (e) => {
        setInputSearch(e.target.value)
    }

    return (
        <S.SearchWrapper>

            <S.SearchHeader>
                <S.IconLink href='#' onClick={searchAppearsDisappears}>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </S.IconLink>
                <h4>Buscar produtos</h4>
                <div></div>
            </S.SearchHeader>

            <S.SearchMain>
                <S.Container>
                    <S.SearchInput
                        value={inputSearch}
                        onChange={handleInputSearch}
                        placeholder="Buscar..."
                    />
                </S.Container>
            </S.SearchMain>

            <S.SearchFooter>
                <S.Container>
                    <S.Quantity>
                        {filteredItens.length} itens
                    </S.Quantity>

                    {filteredItens.map(product => (
                        <ProductInSearch key={product.id} product={product} />
                    ))}
                </S.Container>
            </S.SearchFooter>

        </S.SearchWrapper>
    )
}

const mapStateToProps = (state) => ({
    allProducts: state.products.allProducts
})

const mapDispatchToProps = dispatch => ({
    setSearch: (appears) => dispatch(setSearch(appears))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
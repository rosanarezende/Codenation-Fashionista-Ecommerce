import React, { useState } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../../utils/constants'

import './index.css'

import { setSearch } from '../../actions/search'
import { setProductDetail } from '../../actions/products'

import ProductInSearch from '../../components/ProductInSearch'
import Backdrop from '../../components/Backdrop'


export function Search(props) {
	const { allProducts, setSearch, setProductDetail, goToDetail } = props
	const [inputSearch, setInputSearch] = useState('')

	let filteredItens = []
	if(inputSearch !== "") {
		filteredItens = allProducts.filter(product => (
			product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
	))}
	
	const searchAppearsDisappears = () => setSearch(false)
	
	const handleInputSearch = (e) => setInputSearch(e.target.value)
	
	return (
		<>
			<Backdrop />
			<div className="search" data-testid="search">

				<header className="search__header">
					<span className="search__icon-link"
						data-testid="icon"
						onClick={searchAppearsDisappears}>
						<i className="fa fa-arrow-right" aria-hidden="true"></i>
					</span>
					<h4>Buscar produtos</h4>
					<div></div>
				</header>

				<main className="search__main">
					<div className="search__container">
						<input className="search__input" data-testid="input"
							value={inputSearch}
							onChange={handleInputSearch}
							placeholder="Buscar..."
						/>
					</div>
				</main>

				<footer className="search__footer">
					<div className="search__container">
						{filteredItens.length === 0
							?
							<p className="search__quantity" data-testid="search-any">
								Nenhum item encontrado
                        </p>
							:
							<p className="search__quantity" data-testid="search-any">
								{filteredItens.length} itens
                        </p>
						}

						{filteredItens.map((product, index) => (
							<ProductInSearch 
								key={index} 
								product={product} 
								setSearch={setSearch}
								setProductDetail={setProductDetail}
								goToDetail={goToDetail}
							/>
						))}
					</div>
				</footer>

			</div>
		</>
	)
}

const mapStateToProps = (state) => ({
	allProducts: state.products.allProducts
})

const mapDispatchToProps = dispatch => ({
	setSearch: (appears) => dispatch(setSearch(appears)),
    setProductDetail: (product) => dispatch(setProductDetail(product)),
	goToDetail: () => dispatch(push(routes.detail))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
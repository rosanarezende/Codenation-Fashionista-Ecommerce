import React, { useState } from 'react'
import { connect } from 'react-redux'

import './index.css'

import { setSearch } from '../../actions/search'

import ProductInSearch from '../ProductInSearch'
import Backdrop from '../Backdrop'

export function Search(props) {
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
							<ProductInSearch key={index} product={product} />
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
	setSearch: (appears) => dispatch(setSearch(appears))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
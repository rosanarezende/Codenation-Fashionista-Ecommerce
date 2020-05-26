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
	const [inputSearch, setInputSearch] = useState(undefined)
	const [minValue, setMinValue] = useState(undefined)
	const [maxValue, setMaxValue] = useState(undefined)

	let filteredItens = []

	let filteredMin = allProducts.filter(product => {
		const value = Number(product.actual_price.toString().substr(3).replace(",", "."))
		return minValue ? value >= minValue : true
	})

	let filteredMax = filteredMin.filter(product => {
		const value = Number(product.actual_price.toString().substr(3).replace(",", "."))
		return maxValue ? value <= maxValue : true
	})

	let filteredSearch = filteredMax.filter(product => {
		const productName = product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
		const input = inputSearch?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
		return inputSearch ? productName.includes(input) : true
	}) 
	
	if(inputSearch || minValue || maxValue) filteredItens = filteredSearch
	
	const searchAppearsDisappears = () => setSearch(false)
	
	const handleInputSearch = e => setInputSearch(e.target.value)
	const handleInputMin = e => setMinValue(e.target.value)
	const handleInputMax = e => setMaxValue(e.target.value)
	
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
						<div className="search__inputs-number">

							<input className="search__input-number"
								type="number"
								value={minValue}
								onChange={handleInputMin}
								placeholder="Valor mínimo"
							/>
							<input className="search__input-number"
								type="number"
								value={maxValue}
								onChange={handleInputMax}
								placeholder="Valor máximo"
							/>
						</div>
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
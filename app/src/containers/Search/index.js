import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useClick, useInput } from '../../utils/hooks'
import './index.css'
import { setSearch } from '../../actions/search'
import ProductInSearch from '../../components/ProductInSearch'
import Backdrop from '../../components/Backdrop'

export function Search() {
	const allProducts = useSelector(state => state.products?.allProducts)
	const dispatch = useDispatch()

	const [inputSearch, setInputSearch] = useInput("")
	const [minValue, setMinValue] = useInput("")
	const [maxValue, setMaxValue] = useInput("")
	const [sale, setSale] = useClick(false)

	let filteredItens = []

	let filteredMin = allProducts?.filter(product => {
		const value = Number(product.actual_price.toString().substr(3).replace(",", "."))
		return minValue ? value >= minValue : true
	})

	let filteredMax = filteredMin?.filter(product => {
		const value = Number(product.actual_price.toString().substr(3).replace(",", "."))
		return maxValue ? value <= maxValue : true
	})

	let filteredSearch = filteredMax?.filter(product => {
		const productName = product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
		const input = inputSearch?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
		return inputSearch ? productName.includes(input) : true
	})

	let filteredSale = filteredSearch?.filter(product => {
		return sale ? product.on_sale === true : true
	})

	if (inputSearch || minValue || maxValue || sale) filteredItens = filteredSale

	const searchAppearsDisappears = () => dispatch(setSearch(false))

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
							onChange={setInputSearch}
							placeholder="Buscar..."
						/>
						<div className="search__inputs-number">

							<input className="search__input-number"
								type="number"
								value={minValue}
								onChange={setMinValue}
								placeholder="Valor mínimo"
							/>
							<input className="search__input-number"
								type="number"
								value={maxValue}
								onChange={setMaxValue}
								placeholder="Valor máximo"
							/>
						</div>
						<div className="search__on-sale">
							<button onClick={setSale} className="search__on-sale-button">
								{sale ? "Todos" : "Em promoção"}
							</button>
						</div>
					</div>
				</main>

				<footer className="search__footer">
					<div className="search__container-footer">
						{filteredItens?.length === 0
							?
							<div className="search__empty" data-testid="search-any">
								<h4 className="search__empty-text">Nenhum item encontrado :/</h4>
							</div>
							:
							<p className="search__quantity" data-testid="search-any">
								{filteredItens?.length} itens
                        </p>
						}

						{filteredItens?.map((product, index) => (
							<ProductInSearch
								key={index}
								product={product}
							/>
						))}
					</div>
				</footer>

			</div>
		</>
	)
}

export default Search
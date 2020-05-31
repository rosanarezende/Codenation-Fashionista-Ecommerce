import React from 'react'
import './index.css'
import ProductInSearch from '../ProductInSearch'
import { useSelector } from 'react-redux'

function SearchProducts(props) {
    const { inputSearch, minValue, maxValue, sale } = props
    const allProducts = useSelector(state => state.products?.allProducts)

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

    return (
        <div className="search__container">
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
    )
}

export default SearchProducts
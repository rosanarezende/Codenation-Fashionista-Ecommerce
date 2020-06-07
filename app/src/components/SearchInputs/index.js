import React from 'react'
import './index.css'

function SearchInputs(props) {
    const {
        inputSearch, setInputSearch, 
        minValue, setMinValue, 
        maxValue, setMaxValue, 
        sale, setSale
    } = props

    return (
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
    )
}

export default SearchInputs


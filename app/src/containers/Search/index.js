import React from 'react'
import { useClick, useInput } from '../../utils/hooks'
import './index.css'
import Backdrop from '../../components/Backdrop'
import SearchInputs from '../../components/SearchInputs'
import SearchProducts from '../../components/SearchProducts'
import SearchTop from '../../components/SearchTop'

export function Search() {
	const [inputSearch, setInputSearch] = useInput("")
	const [minValue, setMinValue] = useInput("")
	const [maxValue, setMaxValue] = useInput("")
	const [sale, setSale] = useClick(false)

	return (
		<>
			<Backdrop />
			
			<div className="search" data-testid="search">

				<header className="search__header">
					<SearchTop/>
				</header>

				<main className="search__main">
					<SearchInputs
						inputSearch={inputSearch}
						setInputSearch={setInputSearch}
						minValue={minValue}
						setMinValue={setMinValue}
						maxValue={maxValue}
						setMaxValue={setMaxValue}
						sale={sale}
						setSale={setSale}
					/>
				</main>

				<footer className="search__footer">
					<SearchProducts
						inputSearch={inputSearch}
						minValue={minValue}
						maxValue={maxValue}
						sale={sale}
					/>
				</footer>

			</div>
		</>
	)
}

export default Search
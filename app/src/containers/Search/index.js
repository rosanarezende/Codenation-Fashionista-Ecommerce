import React from 'react'
import { useClick, useInput } from '../../utils/hooks'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../actions/search'
import Backdrop from '../../components/Backdrop'
import SearchInputs from '../../components/SearchInputs'
import SearchProducts from '../../components/SearchProducts'
import AppearsTop from '../../components/AppearsTop'
import './index.css'

export function Search() {
	const [inputSearch, setInputSearch] = useInput("")
	const [minValue, setMinValue] = useInput("")
	const [maxValue, setMaxValue] = useInput("")
	const [sale, setSale] = useClick(false)
	const dispatch = useDispatch()

    const searchAppearsDisappears = () => dispatch(setSearch(false))

	return (
		<>
			<Backdrop />
			
			<div className="search" data-testid="search">

				<header className="search__header">
					<AppearsTop
						onClickFunction={searchAppearsDisappears}
						text="Buscar produtos"
					/>
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
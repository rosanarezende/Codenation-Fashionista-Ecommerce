import React from 'react'
import './index.css'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../actions/search'

function SearchTop() {
    const dispatch = useDispatch()
    const searchAppearsDisappears = () => dispatch(setSearch(false))

    return (
        <>
            <span className="search__icon-link"
                data-testid="icon"
                onClick={searchAppearsDisappears}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
            <h4>Buscar produtos</h4>
            <div></div>
        </>
    )
}

export default SearchTop
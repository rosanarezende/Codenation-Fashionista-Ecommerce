import React from 'react'
import './index.css'

function IconButton(props) {
    const { id, simbol, onClickFunction } = props

    return (
        onClickFunction
            ?
            <button className="icon-button"
                onClick={() => onClickFunction(id)}>
                <i className={`fa fa-${simbol}`} aria-hidden="true"></i>
            </button>
            :
            <button className="icon-button">
                <i className={`fa fa-${simbol}`} aria-hidden="true"></i>
            </button>
    )
}

export default IconButton
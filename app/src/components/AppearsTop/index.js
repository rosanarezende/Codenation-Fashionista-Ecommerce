import React from 'react'
import './index.css'

function AppearsTop(props) {
    const { onClickFunction, text } = props

    return (
        <>
            <span className="icon-link"
                data-testid="icon"
                onClick={onClickFunction}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
            <h4>{text}</h4>
            <div></div>
        </>
    )
}

export default AppearsTop
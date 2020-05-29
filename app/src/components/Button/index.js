import React from 'react'
import './index.css'

function Button(props) {
    const {
        text,
        add,
        black,
        onClickFunction,
        onClickFunctionWhithParam, clickParam
    } = props

    return (
        onClickFunctionWhithParam ?
            <button
                className={black ? "button-black" : add ? "button-add" : "button"}
                onClick={() => onClickFunctionWhithParam(clickParam)}
            >
                {text}
            </button>

            :
            onClickFunction ?
                <button
                    className={black ? "button-black" : add ? "button-add" : "button"}
                    onClick={onClickFunction}
                >
                    {text}
                </button>

                :
                <button
                    className={black ? "button-black" : add ? "button-add" : "button"}
                >
                    {text}
                </button>
    )
}

export default Button
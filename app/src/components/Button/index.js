import React from 'react'
import './index.css'

function Button(props) {
    const {
        addToCart, text,
        information, black, onClickSize
    } = props

    return (
        <>
            {addToCart &&
                <button className="button-add"
                    onClick={addToCart}
                >
                    {text}
                </button>
            }

            {onClickSize &&
                <button
                    className={black ? "button-black" : "button"}
                    onClick={() => onClickSize(information.sku)}
                >
                    {information.size}
                </button>
            }
        </>
    )
}

export default Button
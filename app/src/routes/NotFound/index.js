import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../../utils/constants"

import './index.css'

function NotFound() {
    const dispatch = useDispatch()
    const goToHome = push(routes.home)

    return (
        <div className="not-found">
            <h3>Página não encontrada</h3>
            <p onClick={() => dispatch(goToHome)} className="not-found__link">
                <i className="fa fa-arrow-left" aria-hidden="true"/> Voltar para Home
            </p>
        </div>
    )
}

export default NotFound
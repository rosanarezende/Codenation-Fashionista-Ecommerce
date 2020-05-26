import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../../utils/constants"

import './index.css'

function NotFound(props) {
    const { goToHome } = props
    return (
        <div className="not-found">
            <h3>Página não encontrada</h3>
            <p onClick={goToHome} className="not-found__link">
                <i className="fa fa-arrow-left" aria-hidden="true"/> Voltar para Home
            </p>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    goToHome: () => dispatch(push(routes.home))
})

export default connect(null, mapDispatchToProps)(NotFound)
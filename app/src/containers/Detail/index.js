import React from 'react'
import './index.css'

import DetailImage from '../../components/DetailImage'
import DetailText from '../../components/DetailText'

export function Detail() {
    return (
        <div className="detail" data-testid="detail">
            <DetailImage />
            <DetailText/>
        </div>
    )
}

export default Detail


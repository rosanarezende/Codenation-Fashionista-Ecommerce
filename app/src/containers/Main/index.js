import React from 'react';
import * as S from './styles.js'

import Product from '../../components/Product/index.js';

function Main() {

    const productsList = [
        {
            image: "https://user-images.githubusercontent.com/45580434/79032512-93dbb780-7b7d-11ea-90e0-660875a7e39e.png",
            name: "Vestido Transpasse Bow",
            value: 199.9
        },
        {
            image: "https://user-images.githubusercontent.com/45580434/79032515-96d6a800-7b7d-11ea-8165-4eccc412c144.png",
            name: "Regata Alcinha Folk",
            value: 99.9
        },
        {
            image: "https://user-images.githubusercontent.com/45580434/79032517-98a06b80-7b7d-11ea-81a6-b4fe410cc400.png",
            name: "Top Croped Suede",
            value: 129.9
        },
        {
            image: "https://user-images.githubusercontent.com/45580434/79032518-9a6a2f00-7b7d-11ea-8640-b320faf156d4.png",
            name: "Bata Decote Fluid",
            value: 149.9
        },
        {
            image: "https://user-images.githubusercontent.com/45580434/79032442-d781f180-7b7c-11ea-927f-c30c58ddd501.png",
            name: "Camisa Suede Span",
            value: 189.9
        },
        {
            image: "https://user-images.githubusercontent.com/45580434/79032444-da7ce200-7b7c-11ea-9280-fff5499165e1.png",
            name: "Calça Classic Print",
            value: 159.9
        },
        {
            image: "https://user-images.githubusercontent.com/45580434/79032445-dd77d280-7b7c-11ea-9850-dc933d1a91d5.png",
            name: "Regata Alcinha Folk",
            value: 99.9
        }
    ]

    return (
        <S.MainWrapper>

            <S.Quantity>
                {productsList.length} itens
            </S.Quantity>

            <S.ProductsGrid>
                {productsList.map(product => (
                    <Product product={product}/>
                ))}
            </S.ProductsGrid>

        </S.MainWrapper>
    );
}

export default Main;
import styled from 'styled-components'

export const MainWrapper = styled.main`
    display: flex;
    background-color: #f9f9f9;
    margin-top: 5vh;
    padding: 0 2rem;
    @media screen and (max-width: 1200px) {
        font-size: 70%;
    }
`

export const ProductsContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Quantity = styled.p`
    margin: 1rem 0;
`

export const ProductsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
`
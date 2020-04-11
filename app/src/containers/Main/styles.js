import styled from 'styled-components'

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    min-height: 92vh;
    padding: 0 2rem;
`

export const Quantity = styled.p`
    margin: 1rem 0;
`

export const ProductsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;

    :hover{
        cursor: pointer;
    }
`
import styled from 'styled-components'

export const MainWrapper = styled.div`
    display: flex;
    background-color: #f9f9f9;
    min-height: 92vh;
    padding: 0 2rem;
`

export const ProductsContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Quantity = styled.p`
    margin: 1rem;
`

export const ProductsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    :hover{
        cursor: pointer;
    }
`
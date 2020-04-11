import styled from 'styled-components'

export const ProductCard = styled.div`
    width: 22.5vw;
    margin: 0.5vw;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media screen and (max-width: 1200px) {
        width: 40vw;
    }
`

export const Image = styled.img`
    width: 100%;
`
import styled from 'styled-components'

export const ProductCard = styled.div`
    width: 22.5vw;
    margin: 0.5vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    position: relative;
    :hover{
        cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
        width: 40vw;
    }
`

export const Image = styled.img`
    width: 100%;
`

export const Stamp = styled.div`
	position: absolute;
	display: flex;
    align-items: flex-end;
	top: 0;
	right: 0;
    background-color: black;
    color: white;
    padding: 0.2rem 0.5rem;
`

export const Price = styled.div`
    display: flex;
    justify-content: center;
`

export const BeforePrice = styled.span`
    margin-right: 1rem;
    color: grey;
    text-decoration: line-through;
`
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 1rem;
    align-items: center;
`

export const IconLink = styled.a`
    margin: 0.5rem;
    text-decoration: none;
    color: #bababa;
    transition: all 0.2s ease-in-out;

    :hover{
        color: black;
    }
`
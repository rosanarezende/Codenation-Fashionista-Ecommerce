import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    align-items: center;
    height: 5vh;
    @media screen and (max-width: 1200px) {
        font-size: 80%;
    }
`

export const IconSearch = styled.a`
    margin: 0.5rem;
    text-decoration: none;
    color: #bababa;
    transition: all 0.2s ease-in-out;
    font-size: 120%;
    :hover{
        color: black;
    }
`

export const IconCart = styled.a`
    margin: 0.5rem;
    text-decoration: none;
    color: #bababa;
    transition: all 0.2s ease-in-out;
    font-size: 120%;
    :hover{
        color: black;
    }
    overflow: hidden;
    position: relative;
`

export const Badge = styled.span`
  position: absolute; 
  background-color: rgb(255, 0, 0, 0.7);
  color: white;
  top: 0;
  right: 0;
  border-radius: 50px;
  text-align: center;
  margin-right: -60%;
  margin-top: -40%;
  padding: 0 0.3rem 0.1rem;
  font-size: 70%;
  min-width:10px;
`
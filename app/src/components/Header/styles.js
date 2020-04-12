import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    background-color: white;
    width: 100%;
    height: 5vh;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    
    @media screen and (max-width: 1200px) {
        font-size: 80%;
    }
`

export const HeaderNavbar = styled.nav`
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
`

export const IconSearch = styled.a`
    margin: 0.5rem;
    text-decoration: none;
    color: #bababa;
    transition: all 0.2s ease-in-out;
    font-size: 120%;
    :hover, :active{
        color: black;
    }
`

export const IconCart = styled.a`
    margin: 0.5rem;
    text-decoration: none;
    color: #bababa;
    transition: all 0.2s ease-in-out;
    font-size: 120%;
    :hover, :active{
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
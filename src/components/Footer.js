import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
    <Container>
        <Link to="/about" style={{color:"black"}}>
        About
        </Link>
    </Container>
    </>
  )
}

const Container = styled.div`
background: lightslategray;
    position: relative;
    background-color: rgb(102 171 201) 0px 0px 20px;
    bottom: 0;
    opacity: 0.8;
    min-height: 28px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Footer
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    
        <Container className='navbar'>
            <Link className='home-link' to='/'><Logo>
            <p style={{marginLeft:20,marginRight:20}}>ResumePlus</p>
            </Logo></Link>
            <RightMenu>
            <Link to='/'>Resume templates</Link>
            <Link to='/about'>About us</Link>
            </RightMenu>
        </Container>
    </>
  )
}

const Container = styled.div`
min-height:90px;
position:relative;
display:flex;
justify-content:space-between;
align-items:center;
top:0;
left:0;
right:0;
z-index:100;
border-bottom:1px solid transparent;
box-shadow: 0px 0px 20px #66abc9;
img{
  height:60px;
  width:60px;  
}
`

const RightMenu = styled.div`
display:flex;
gap:50px;
padding: 0 20px;
align-items:center;
font-size:larger;
@media(max-width:768px){
  display:none;
}
a{
  font-weight:600;
  flex-wrap:nowrap;
  color: #0298B8;
}
`

const Logo = styled.div`
display: flex;
align-items: center;
gap: 20px;
font-size: xx-large;
font-family: "Montserrat";
color:black;
@media (max-width:768px){
  p{
    text-align:center;
  }
}
`

export default Navbar
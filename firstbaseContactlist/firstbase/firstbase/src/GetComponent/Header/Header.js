import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <Container>
      <Wrapper>
      <Text>CONTACT LIST</Text>
                <Button to="/Addcontact"><button>Add Contact</button></Button>
      </Wrapper>
  </Container>
  )
}

export default Header
const Container =styled.div`
width: 68%;
height: 42px;
/* background-color: blueviolet; */
display: flex;
align-items: center;
justify-content: center;
@media(max-width:768px){
/* background-color: palevioletred; */
width: 78%; 
  }
@media(max-width:425px){
/* background-color: palevioletred; */
width: 100%; 
  }
`
const Wrapper =styled.div`

width: 68%;
height: 42px;
/* background-color: red; */
display: flex;
align-items: center;
justify-content: space-around;
@media(max-width:768px){
/* background-color: paleturquoise; */
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
  }
@media(max-width:425px){
width: 96%;
display: flex;
align-items: center;
justify-content: space-between;
  }
`
const Text =styled.div`
font-weight: 800;
font-size: large;
font-family: arvo;
@media  (max-width: 768px){
  font-weight: 800;
font-size: large;
font-family: arvo;

}
@media  (max-width: 425px){
  font-weight: 800;
font-size: 17px;
font-family: arvo;

}
`
const Button =styled(Link)`
@media  (max-width: 768px){

  button{
    padding: 2px 32px;
    border: 2.5px solid white;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    // background-color:burlywood;

}
:hover>button{
  background-color: black;
  color:white;
  border: 2.5px solid white;
  
   }
}
@media  (max-width: 425px){

  button{
    padding: 2px 32px;
    border: 2.5px solid white;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    background-color:blue;

}
:hover>button{
  background-color: black;
  color:white;
  border: 2.5px solid white;
  
   }
}
:hover>button{
background-color: black;
color:white;
border: 2.5px solid white;

 }
button{
    padding: 8px 12px;
    border: 1.5px solid grey;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
  

}

`

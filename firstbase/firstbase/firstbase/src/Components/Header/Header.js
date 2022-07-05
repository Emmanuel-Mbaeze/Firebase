import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Header = () => {
  return (
  <Container>
      <Wrapper>
      <Navs>
              <Home to="/">Home</Home>
              <Uploadimage to="/Uploadimage">Uploadimage</Uploadimage>
              <Uploads to="/Uploadedimg">Uploads</Uploads>
          </Navs>
          <Image></Image>
    
      </Wrapper>
  </Container>
  )
}

export default Header

const Container =styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
@media (min-width:768px) and (max-width:834px) {
}
@media (min-width:325px) and (max-width:428px) {
/* background-color: red; */
}
@media (max-width:320px){

}
`
const Wrapper =styled.div`
width: 90%;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
@media (min-width:768px) and (max-width:834px) {
width: 100%;

}
@media (min-width:325px) and (max-width:428px) {
/* background-color: blue; */
width: 100%;

}
@media (max-width:320px){
    width: 100%;

}
`



const Image =styled.div`
width: 42%;
height: 70px;
`
const Navs =styled.div`
width: 42%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
@media (min-width:768px) and (max-width:834px) {
    width: 100%;
}
@media (min-width:325px) and (max-width:428px) {
/* background-color: red; */
width: 100%;

}
@media (max-width:320px){
    width: 100%;
}
`
const Home =styled(Link)`
font-weight: 700;
font-size: 25px;
color: black;
text-decoration: none;
@media (min-width:768px) and (max-width:834px) {
    width: 100%;
font-weight: 700;
font-size: 32px;
}
@media (min-width:325px) and (max-width:428px) {
/* background-color: red; */
width: 100%;
font-weight: 700;
font-size: 22px;
}
@media (max-width:320px){
    width: 100%;
font-weight: 700;
font-size: 21px;
}
`
const Uploadimage =styled(Link)`
font-weight: 700;
font-size:25px;
color: black;
text-decoration: none;
@media (min-width:768px) and (max-width:834px) {
    width: 100%;
font-weight: 700;
font-size: 29px;
margin-left: 50px;
margin-top: 4px;

}
@media (min-width:325px) and (max-width:428px) {
/* background-color: red; */
width: 100%;
font-weight: 700;
font-size: 22px;
margin-left: 50px;

}
@media (max-width:320px){
    width: 100%;
font-weight: 700;
font-size: 21px;
margin-left: 20px;
}

`
const Uploads =styled(Link)`
font-weight: 700;
font-size: 25px;
color: black;
text-decoration: none;

@media (min-width:768px) and (max-width:834px) {
    width: 100%;
font-weight: 700;
font-size: 32px;
margin-left: 50px;
margin-top: 4px;
}
@media (min-width:325px) and (max-width:428px) {
/* background-color: red; */
width: 100%;
font-weight: 700;
font-size: 22px;
margin-left: 50px;
}
@media (max-width:320px){
    width: 100%;
font-weight: 700;
font-size: 21px;
margin-left: 20px;
}
`

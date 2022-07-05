import React from 'react'
import styled from "styled-components"
const Card = () => {
  return (
      <Container>
   <Cardes>
       <Name>name</Name>
       <Age>age</Age>
       <Description>description</Description>
       <Subject>subject</Subject>
   </Cardes>
   </Container>
  )
}

export default Card
const Container = styled.div`
width: 100%;
height: 610px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`
const Cardes=styled.div`
width: 25%;
height: 400px;
/* background-color: blue; */
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const Name=styled.div``
const Description=styled.div``
const Subject=styled.div``
const Age=styled.div``

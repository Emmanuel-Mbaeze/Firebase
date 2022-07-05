import React from 'react'
import styled from 'styled-components'
import Card from './Card'
const Body = () => {
  return (
 <Container>
     {/* <h1>Hello</h1> */}
     <Card/>
     {/* <Card/> */}
     {/* <h1>Hello</h1> */}

 </Container>
  )
}

export default Body
const Container = styled.div`
width: 100%;
height: 450%;
background-color: red;
`

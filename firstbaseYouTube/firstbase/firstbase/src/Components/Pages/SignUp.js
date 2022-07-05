import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Header/Header'
const SignUp = () => {
  return (
<>
<Header/>
<Text>
  <h2>Create Account</h2>
  </Text>
<Container>
    <Wrapper>
        <Image></Image>
        <Uploadimg type="file"/>
        <Name placeholder="input Name"></Name>
        <UserName placeholder="Input username"></UserName>
          <Password placeholder="Input password" type="password"/>
        <Email placeholder="Input E-mail"></Email>
        <Button to="/"><button>SignUp</button></Button>
    </Wrapper>
</Container>
</>
  )
}

export default SignUp
const Container = styled.div`
width: 100%;
min-height: 525px;
/* background-color: aquamarine; */
display: flex;
justify-content: center;
align-items: flex-start;
`
const Wrapper = styled.div`
width: 28%;
min-height: 390px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
margin-top: 15px;
`
const Image = styled.div``
const Uploadimg = styled.div``
const Name = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
`
const UserName = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
`
const Email = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
`
const Password = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
`
const Button = styled(Link)`
 button{
  padding: 12px 24px;
border: 1.5px solid grey;
background-color: purple;
color: white;
border-radius: 5px;
outline: none;
 }
 :hover>button{
background-color: transparent;
color: black;

 }
`
const Text = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
`
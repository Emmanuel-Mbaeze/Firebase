import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Header = () => {
  return (
    <Container>
        <Wrapper>
<Left to="/"> <Logo>
<img src='/11.png'/>
  
  </Logo></Left>  
<Right>
    <Avatar>
<img src='/pop 034.jpg'/>
      
    </Avatar>
    <SignIn to="/SignIn"><button>SignIn</button></SignIn>
    <SignUp to="/SignUp"><button>SignUp</button></SignUp>
</Right>
        </Wrapper>
    </Container>
  )
}

export default Header
const Container = styled.div`
width: 100%;
height: 60px;
background-color: #e2e4e6e8;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 80%;
height: 50px;
/* background-color: #a2a6a8; */
display: flex;
justify-content: space-between;
align-items: center;
`
const Left = styled(Link)`
width: 32%;
height: 50px;
display: flex;
align-items: center;
justify-content: flex-start;
`
const Logo = styled.div`
width: 50px;
height: 50px;
border-radius: 100%;
/* background-color: purple; */
object-fit: cover;
img{
  width: 50px;
height: 50px;
border-radius: 100%;
object-fit: cover;
}
`
const Right = styled.div`
width: 32%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-around;
`
const SignIn = styled(Link)`
button{
  padding: 8px 12px;
background-color: transparent;
border: 1.5px solid grey;
border-radius: 5px;
outline: none;
}
`
const SignUp = styled(Link)`
button{
  padding: 8px 12px;
background-color: transparent;
border: 1.5px solid grey;
border-radius: 5px;
outline: none;
}
`
const Avatar = styled.div`
width: 50px;
height: 50px;
border-radius: 100%;
background-color: orangered;
object-fit: cover;
img{
  width: 50px;
height: 50px;
border-radius: 100%;
object-fit: cover;
}

`

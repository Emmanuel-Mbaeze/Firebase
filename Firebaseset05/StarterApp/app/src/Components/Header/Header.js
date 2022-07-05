import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
   <Container>
       <Wrapper>
           <Codelab>
               CODELAB
           </Codelab>
<Set05>
    SET05
</Set05>
       </Wrapper>
   </Container>
  )
}

export default Header
const Set05 = styled.div`
font-weight: 900;
font-size: larger;
font-family: Arvo;
`
const Codelab = styled.div`
font-weight: 900;
font-size: larger;
/* font-family: Arvo; */
font-family:Arvo;

`
const Container = styled.div`
width:100%;
height: 60px;
background-color: #e8e8e8;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 60%;
height: 50px;
/* background-color: #f0f8ff; */
display: flex;
justify-content: space-between;
align-items: center;

`

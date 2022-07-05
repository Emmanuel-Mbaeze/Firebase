import React from 'react'
import Header from '../../Header/Header'
import styled from 'styled-components'
const Home = () => {
  return (
<>
<Header/>
<Container>
      <Wrapper>
          <Post>
              <Card>
              <textarea placeholder="What's on your Mind"/>
              <Postnow>POST</Postnow>
              </Card>
          </Post>
  <CreatedPost>
<Topofpost>
<Left>
<Avr>
<img src='/pop 034.jpg'/>

  </Avr>
<Nameandemail>
<Name>Emma</Name>
<Emails>Emma@test.com</Emails>
</Nameandemail>
</Left>
<Right>
<Date>
  3mins ago
  </Date>
</Right>
</Topofpost>
<Image>
<img src='/CJRY7408.JPG'/>
    </Image>
              <Text><h6>Returns the least common multiple of two or more numbers.

Use the greatest common divisor (GCD) formula and the fact that lcm(x,y) = x * y / gcd(x,y) to determine the least common multiple. The GCD formula uses recursion.

Uses reduce function from the inbuilt module functools. Also defines a method spread for javascript like spreading of lists.</h6></Text>
              <Reactions>
                  <Love></Love>
                  <Others>
<Comment>
  Comment
</Comment>
                  </Others>
              </Reactions>

  </CreatedPost>

           
      </Wrapper>
  </Container>
</>
  )
}

export default Home
const Container = styled.div`
width: 100%;
min-height: 100vh;
/* background-color: #ddd; */
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 50%;
min-height: 100vh;
/* background-color: aliceblue; */
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const Date = styled.div`
font-weight: 500;
font-size: 15px;
margin-right: 10px;
`
const Name = styled.div`
font-weight: 600;
font-size: 15px;
font-family: arvo;

`
const Emails = styled.div`
font-weight: 400;
font-size: 15px;
`
const Nameandemail = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
margin-left: 5px;
`
const Topofpost = styled.div`
display:flex;
align-items: center;
justify-content:space-between ;
`
const Left = styled.div`
display: flex;
`
const Right = styled.div`
`
const Post = styled.div`
  min-height: 240px;
 width: 85%;
 background-color: white;
 box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
 text-align: center;
`
const Postnow = styled.button`
padding: 14px 210px;
border-radius: 5px;
background-color: purple;
outline: none;
border: none;
color: white;

`
const Reactions = styled.div`
width: 100%;
height: 50px;
/* background-color: red; */
display: flex;
justify-content: space-around;
align-content: center;
`
const Others = styled.div`
width: 43%;
height: 50px;
/* background-color: greenyellow; */
display: flex;
justify-content: flex-end;
align-items: center;
`
const Love = styled.div`
width: 43%;
height: 50px;
/* background-color: green; */
`
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
/* background-color: red; */
min-height: 240px;

textarea{
  width: 90%;
  min-height: 120px;
  border: 1.5px solid grey;
  outline: none;

}
`
const Avr = styled.div`
width: 60px;
height: 60px;
border-radius: 100%;
background-color: purple;
object-fit: cover;
img{
  width: 60px;
height: 60px;
border-radius: 100%;
object-fit: cover;
}
`
const Text = styled.div`
background-color: red;
width: 498px;
text-align: center;
margin-left: 3px;
`
const CreatedPost = styled.div`
  min-height: 280px;
 width: 85%;
 background-color: white;
 box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
 margin-bottom: -40px;
text-align: center;
/* margin-top: 50px; */


`
const Image = styled.div`
width: 100%;
height: 200px;
background-color: red;
img{
  width: 100%;
height: 200px;
object-fit: cover;
}
`

const Comment = styled.button`
padding:8px 12px;
background-color: purple;
outline: none;
border: none;
color: white;
border-radius: 5px;
`

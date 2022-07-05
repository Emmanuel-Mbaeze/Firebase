import { useEffect, useState } from "react";
import styled from "styled-components"

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Base/Base";
const Card = () => {
  const [baseData, setBaseData] = useState([]);

  const getData = async () => {
    const data = await getDocs(collection(db, "set05"));
    setBaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  console.log(baseData);

  useEffect(() => {
    getData();
  }, []);
  return (
 <Container>
   {baseData?.map((props)=>{
     return(
      <Wrapper key={props.id}>
      <Name>
          <Title>Name:</Title>
          <Text> {props.Name}</Text>
      </Name>
      <Course>
          <Title>Course:</Title>
          <Text> {props.Course}</Text>
          </Course>
      <Description>
      <Title1>About:</Title1>
      
      
          <Text1> {props.Description}</Text1>
      </Description>
           </Wrapper>
     )
   })}
   
 </Container>
  )
}

export default Card
const Title = styled.div`
display:flex;
justify-content: center;
align-items: center;
/* background-color: blue; */
height: 75px;
font-weight: 700;
font-size: large;
`
const Title1 = styled.div`
display:flex;
justify-content: center;
align-items: flex-start;
/* background-color: blue; */
height: 75px;
font-weight: 700;
font-size: large;
`
const Text = styled.div`
display:flex;
justify-content: center;
align-items: center;
/* background-color: hotpink; */
height: 75px;
margin-bottom: -2px;
`
const Text1 = styled.div`
display:flex;
justify-content: center;
align-items: center;
/* background-color: gold; */
/* height: 265px; */
margin-bottom: -2px;
width: 900px;

/* width:500%; */
/* text-align: end; */
line-height: 1.4;
/* color: red; */
	/* font-weight: 300; */
/* font-size: 20px; */
`
const Name = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
/* background-color: gold; */
height: 75px;
width: 100%;

`
const Course = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
height: 75px;
width: 100%;
margin-top: -25px;

`
const Description = styled.div`
display:flex;
justify-content: flex-start;
align-items: flex-start;
/* background-color: red; */
height: 245px;
width: 100%;
margin-bottom: -210px;
/* background-color: brown; */

`
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: #F2F2F2;
display: flex;
flex-wrap:wrap;
justify-content: space-between;

align-items: flex-end;

`
const Wrapper = styled.div`
width: 300px;
/* width: 100%; */
margin-top:40px;
height: 350px;
/* height: 100%; */
background-color: white;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
display: flex;
flex-direction: column;
align-items: center;
`
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Homescreen/Base1";

const Uploadedimg = () => {
  const [reGet, setReGet] = useState([]);

    const getData = async () => {
        const user = await collection(db, "imgUp");
        onSnapshot(user, (snapshot) => {
          const r = [];
          snapshot.forEach((doc) => {
            r.push({ ...doc.data(), id: doc.id });
          });
          setReGet(r);
        });
      };
      useEffect(() => {
        getData();
      }, []);
  return (
 <>
    <div>
<Head>
 <Text>
<h1> <strong>UPLOADED IMAGES</strong></h1> 
</Text>
      <Button  to="/"><button>Home</button></Button>
</Head>
      <ViewData>
          {reGet?.map((props) => (
            <Card key={props.id}>
              <img src={props.avatar} alt="" />
              <h2> {props.name} </h2>
              <i> {props.email} </i>
              <h4>{props.Bio}</h4>
            </Card>
          ))}
        </ViewData>

    </div></>
  )
}

export default Uploadedimg
const Button = styled(Link )`
display: flex;
align-items: center;
margin-bottom: 24px;
text-decoration: none;
:hover>button{
background-color: white;
color:black;
border: 2px solid grey;

 }
button{
  @media (min-width:768px) and (max-width:834px) {
      background-color: black;
    padding: 12px 32px;
font-size: 24px;

    }
    padding: 12px 26px;
background-color: black;
color: white;
margin-top: 30px;
border: none;
outline: none;
border-radius: 7px;
}
`
const ViewData = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: #4285f4; */
background-image: url("/bg.jpg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
`;
const Card = styled.div`
  min-height: 320px;
  width: 250px;
  background-color: #fff;
  text-align: center;
  margin: 10px;
  margin-top: 30px;

  img {
    height: 150px;
    width: 150px;
    background-color: #ccc;
    border-radius: 50%;
    margin-top: 7px;
  }
`;
const Head = styled.div`
@media (min-width:325px) and (max-width:768px) {
    display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
/* background-color: red; */
margin-right: -500px;


    }
    @media (max-width:320px){
        display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
height: 60px;
/* background-color: red; */
margin-right: -500px;
}
display: flex;
align-items: center;
justify-content: space-around;
width: 90%;
height: 90px;
background-color: white;
/* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; */
/* margin-left: 50px; */
`
const Text = styled.div`
@media (min-width:320px) and (max-width:768px) {

    h1 {
    font-size: 20px;

}
@media (max-width:320px){
h1{
    font-size: 18px;
    /* color: blue; */
}
}
}
`
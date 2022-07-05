import React,{useState,useEffect}from 'react'
import {collection,getDocs, onSnapshot} from "firebase/firestore"
import {db} from "../../Components/Base/Base"
// import { Link } from 'react-router-dom'
import styled from "styled-components"
import Header from '../Header/Header'
const Home = () => {
// const [getDatas,setGetDatas]=useState([])
// const getUser = async()=>{
//   const data = await getDocs(collection(base,"users"))
//   setGetDatas(data.docs.map((el)=>({...el.data(),id:el.id})))
// }
// useEffect(()=>{
//   getUser()
// },[])

// const [getDatas,setGetDatas]=usestate([])
// const getUsers = async ()=>{
//   const data = await getDocs(collection(base,"users"))
//   setGetDatas(data.docs.map((el)=>({...el.data(),id:el.id})))
// }
// useEffect(()=>{
//   getUsers
// },[])

// const [getDatas,setGetDatas]=useState([])
// const getUser = async ()=>{
//   const intel = await getDocs(collection(base,"users"))
//   setGetDatas (intel.docs.map((el)=>({...el.intel(),id:el.id})))
// }
// useEffect(()=>{
//   getUser()
// },[])

    const [baseData, setBaseData] = useState([]);
    const [Snapuser,setSnapUser] = useState([])
    const getData = async () => {
      const data = await getDocs(collection(db,"UserContacts"));
      setBaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
   const snapGet = async()=>{
     const user= collection(db,"UserContacts");
     onSnapshot(user,(snapshot)=>{
    const r = []
    snapshot.forEach((doc)=>{
      r.push({...doc.data(),id:doc.id})
      console.log(r);
    })
    setSnapUser(r)
     })
   }
    console.log(baseData);
  

    const Randomcolors = [
         "#123456",
          "red",
          "brown",
          "blue",
          "purple",
          "black",
          "aqua",
          "darkolivegreen",
          "burlywood"
      ]
      useEffect(() => {
        getData()
        snapGet()
      }, []);

      const Rand = ()=>{
        return Math.floor(Math.random()*Randomcolors.length)
      }
  return (
   <Container>
            <Wrapper>
              <Header/>
   
          <Down>
          {Snapuser?.map((props)=>{
         return(
          <Holder>
          <Abbreviation style={{backgroundColor:Randomcolors[Rand()]}}>
            {props.Firstname.charAt(0) }
            {props.Lastname.charAt(0)}
        
          </Abbreviation>
          <Name>
              <Firstname>{props.Firstname}</Firstname>
              <Lastname>{props.Lastname}</Lastname>
          </Name>
          <Contact>
              <Companyname>{props.Company}</Companyname>
              <Phone>{props.Phone}</Phone>
          </Contact>
          </Holder>
          )
     })}
      </Down>

        </Wrapper>
           
   </Container>
  )
}

export default Home
const Container =styled.div`
width: 100%;
height: 650px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
const Wrapper =styled.div`
width:70%;
height: 550px;
/* min-height: 100vh; */

background-color: #ddd;
display: flex;
flex-wrap: wrap;

flex-direction: column;
align-items: center;
justify-content: space-between;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

`
const Down = styled.div`
width:70%;
height: 490px;
min-height: 60vh;
  /* background-color: burlywood; */

display: flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
@media  (max-width: 425px){
  width:96%;

}
`
const Holder =styled.div`
@media  (max-width: 425px){
  display: flex;
  flex-wrap: wrap;
}
width: 100%;
height: 70px;
/* background-color: hotpink; */
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

display: flex;
align-items: center;
justify-content: space-around;
margin-bottom:10px;
`
const Abbreviation =styled.div`
@media  (max-width: 425px){
background-color: black;

}
width: 40px;
height: 40px;
border-radius: 70px;
background-color: purple;
display: flex;
align-items: center;
justify-content: center;
color: white;
`

const Name =styled.div`
@media  (max-width: 425px){
/* background-color: rosybrown; */
width: 90px;
display: flex;
justify-content: space-between;
align-items: center;
}
width: 120px;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;


`
const Firstname =styled.div`
font-weight: 700;
font-size: small;
font-family: arvo;
`
const Lastname =styled.div`
font-weight: 700;
font-size: small;
font-family: arvo;
margin-right: 30px;
@media  (max-width: 425px){
margin-left: 35px;

}

`

const Contact =styled.div`
@media  (max-width: 425px){
/* background-color: red; */
width: 90px;

}
width: 120px;
height: 45px;
/* background-color: pink; */
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const Companyname =styled.div`
font-weight: 700;
font-size: small;
font-family: arvo;
`
const Phone =styled.div`
font-weight: 700;
font-size: small;
font-family: arvo;`

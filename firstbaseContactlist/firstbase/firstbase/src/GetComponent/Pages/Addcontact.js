import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {collection,addDoc} from "firebase/firestore"
import {db} from "../../Components/Base/Base"
const Addcontact = () => {
    const [Firstname,setFirstname]=useState("")
    const [Lastname,setLastname]=useState("")
    const [Company,setCompany]=useState("")
    const [Phone,setPhone]=useState("")
    const postData = async()=>{
        await addDoc(collection(db,"UserContacts"),{
            Firstname,
            Lastname,
            Company,
            Phone
        })
    }
// const postDatas = async ()=>{
//   await addDoc(collection(base,"users"),{
//     surname,
//     school,
//     age,\
//     subject
//   })
// }
  return (
    <Container>
        <Wrapper>
            <Nameinput value={Firstname} onChange={(e)=>{setFirstname(e.target.value)}} placeholder="Firstname"></Nameinput>
            <Secondnameinput value={Lastname} onChange={(e)=>{setLastname(e.target.value)}}  placeholder="Lastame"></Secondnameinput>
            <Compantinput  value={Company} onChange={(e)=>{setCompany(e.target.value)}} placeholder="Company"></Compantinput>
            <Numberinput  value={Phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Number"></Numberinput>
            <Button onClick={postData} to="/"><button>Save</button></Button>
        </Wrapper>
    </Container>
  )
}

export default Addcontact
const Container = styled.div`
width: 100%;
height: 650px;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 27%;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
background-color: #ddd;
@media(max-width:768px){
/* background-color: paleturquoise; */
width: 42%;
height: 400px;
display: flex;
align-items: center;

  }
@media(max-width:425px){
/* background-color: paleturquoise; */
width: 62%;
height: 400px;
display: flex;
align-items: center;

  }
`
const Nameinput = styled.input`
  width: 75%;
    padding: 15px;
    border-radius: 30px;
    margin: 2.5%;
    border: none;
    outline: none;
    outline: none;
    box-shadow: 0px 1px 5px #a3a3a3;`
const Secondnameinput = styled.input`
  width: 75%;
    padding: 15px;
    border-radius: 30px;
    margin: 2.5%;
    border: none;
    outline: none;
    outline: none;
    box-shadow: 0px 1px 5px #a3a3a3;`
const Compantinput = styled.input`
  width: 75%;
    padding: 15px;
    border-radius: 30px;
    margin: 2.5%;
    border: none;
    outline: none;
    outline: none;
    box-shadow: 0px 1px 5px #a3a3a3;`
const Numberinput = styled.input`
  width: 75%;
    padding: 15px;
    border-radius: 30px;
    margin: 2.5%;
    border: none;
    outline: none;
    outline: none;
    box-shadow: 0px 1px 5px #a3a3a3;`
const Button = styled(Link)`
:hover>button{
background-color: white;
color:black;
border: 2px solid grey;

 }
button{
    padding: 12px 26px;
background-color: black;
color: white;
margin-top: 30px;
border: none;
outline: none;
border-radius: 7px;
}
`

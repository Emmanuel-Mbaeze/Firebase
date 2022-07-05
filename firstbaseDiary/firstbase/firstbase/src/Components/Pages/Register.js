import React,{useState} from 'react'
import {collection,doc,addDoc} from "firebase/firestore"
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Header/Header'
// import UseR from "../../../public/user.png"
import { auth,db } from '../Base/Base'
const Register = () => {
  const navigate = useNavigate()
const [userName,setUsername]=useState("")
const [name,setName]=useState("")
const [password,setPassword]=useState('')
const [email,setEmail]=useState("")
// const [Avr ,setAvr]=useState("")
// const  registerUser = async ()=>{
//   const navigate = useNavigate()
//   const user = doc(collection(db,"DiaryUsers"))
//   await addDoc(user,{userName,email,password,name})
//   setUsername("");
//   setName("");
//   setPassword("");
//   setEmail("");
// }
const authUser =async ()=>{
  const user = await createUserWithEmailAndPassword(auth,email,password)
  console.log(user.user.id);
  if(user){
    const userData = doc(collection(db,"DiaryUsers"),user.user.uid)
    await addDoc(userData,{userName,email,password,name})
  }
  setUsername("");
  setName("");
  setPassword("");
  setEmail("");
  navigate("/")
}

const authUsersWithOther = async () =>{
  const provider = new GoogleAuthProvider()
  const user = await signInWithPopup(auth,provider)
  console.log(user)
  if(user){
    const userData = doc(collection(db,"DiaryUsers"),user.user.uid)
    await addDoc(userData,{
      userName:user.user.displayName,
      email:user.user.email,
    })
  }
  setEmail("");
  setPassword("")
  navigate("/")
}
  return (
<>
<Header/>
<Text>
  <h2>Create Account</h2>
  </Text>
<Container>
    <Wrapper>
        <Uploadimg type="file"/>
        <Name placeholder="input Name"
        value={name} onChange={(e)=>{
          setName(e.target.value)
        }}
        />
        <UserName placeholder="Input username"
        value={userName} onChange={(e)=>{
          setUsername(e.target.value)
        }}
        />
          <Password placeholder="Input password" type="password" 
          value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }}
          />
        <Email placeholder="Input E-mail" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <Button onClick={authUser}><button>SignUp</button></Button>
        <Button1 onClick={authUsersWithOther}><button>SignUp with Google  </button></Button1>
        {/* <Option>
<h7>Don't have an Account?  </h7>
<Rout to="/Login">
<h4>Login</h4>

</Rout>
          </Option> */}
    </Wrapper>
</Container>
</>
  )
}

export default Register
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
min-height: 430px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
margin-top: 15px;
@media (max-width: 320px) {
  width: 85%;
min-height: 350px;
/* background-color: black; */
  }
@media (min-width:360px) and (max-width:428px){
  width: 75%;
min-height: 350px;
/* background-color: black; */
}
@media (min-width:768px) and (max-width:834px){
  width: 45%;
min-height: 350px;
/* background-color: black; */
}
`
const Image = styled.div``
const Uploadimg = styled.div``
const Name = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
margin-top: 30px;

`
const UserName = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
margin-top: 30px;

`
const Email = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
margin-top: 30px;

`
const Password = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
margin-top: 30px;

`
const Button = styled.div`
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
color:black;

 }
 margin-top: 40px;

`

const Button1 = styled.div`
button{
  padding:12px 40px ;
  border: 1.7px solid purple;
  outline: none;
  /* color:white; */
  border-radius: 2px;
  background-color: transparent;
}
:hover>button{
background-color: purple;
color: white;

}
margin-top: 40px;
`
const Text = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
`
// const Rout = styled(Link)`
// text-decoration: none;
// color: black;
// `
// const Option = styled.div`
// /* background-color: aquamarine; */
// width: 75%;
// display:flex;
// justify-content: space-evenly;
// align-items: center;
// `
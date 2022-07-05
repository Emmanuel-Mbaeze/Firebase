// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";


// const app = initializeApp({
//   apiKey: "AIzaSyBzmPNmFiVNFXd-JnlxQZ5wisb7MKeFfvU",
//   authDomain: "first-time-base.firebaseapp.com",
//   projectId: "first-time-base",
//   storageBucket: "first-time-base.appspot.com",
//   messagingSenderId: "1008410917752",
//   appId: "1:1008410917752:web:75dfc165ebaa68fd1ea68d"
// });

// const ab = getFirestore(app);
// const storage = getStorage(app);

// export { ab, storage };





// import React,{useEffect,useState} from 'react'
// import styled from 'styled-components'
// import {db,storage} from "./Base1"
// import {getDownloadURL,ref,uploadBytesResumable} from "firebase/storage"
// import {addDoc,collection,onSnapshot} from "firebase/firestore"
// const Home = () => {
//   const [Name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   const [avatar,setAvatar]=useState("")
//   const [ReGet,setReGet]=useState([])

//   const imageUpload = async(e)=>{
//     const file = e.target.files[0];
//     const fileRef = ref(storage,"/myImage", +file.Name);
//     const storageRef = uploadBytesResumable(fileRef,file);
//     getDownloadURL(storageRef.snapshot.ref).then((url)=>{
//       setAvatar(url)
//     })
//   }

//   const postData = async()=>{
//     addDoc(collection(db,"imgUploads"),{
//       Name,
//       email,
//       avatar:await avatar
//     })
//     setName("")
//     setAvatar("")
//     setEmail("")
//   }

//     const getData = async ()=>{
//       const User = await collection(db,"imgUploads")
//       onSnapshot(User,(snapshot)=>{
//         const r = [];
//         snapshot.forEach((doc)=>{
//           r.push({...doc.data(),id:doc.id})
//         })
// setReGet(r)
//       })
//   }

//   useEffect(()=>{
// getData()
//   },[])
//   return (
//   <Container>
//       <Wrapper>
//           <Left>
//               <Wrap>
//                   <Picture>
//                   <Pic  onChange={imageUpload} placeholder="choose file" type="file"/>
//                   <h3>Choose File</h3>
//                   </Picture>
//                   <Mail 
//                   value={email}
//                   onChange={(e)=>{
//                     setEmail(e.target.value)
//                   }}
//                   placeholder="e-mail"/>
//                   <Name 
//                   value={Name}
//                   onChange={(e)=>{
//                     setName(e.target.value)
//                   }}
//                   placeholder="Name"/>
//                   <Button onClick={postData}><button>Upload Image</button></Button>
//               </Wrap>
//           </Left>
//           <Right>

//             {ReGet?.map((props)=>(
//             <Card key={props.id}>
//               <img src={props.avatar} alt="avatar"/>
//               <h2>{props.name}</h2>
//               <i>{props.email}</i>
//             </Card>
//             ))}
//           </Right>
//       </Wrapper>
//   </Container>
//   )
// }

// export default Home
// const  Container = styled.div`
// width: 100%;
// height: 690px;
// display: flex;
// justify-content: center;
// align-items: center;
// `
// const  Wrapper = styled.div`
// width: 99%;
// height: 690px;
// display: flex;
// justify-content: space-between;
// align-items: center;
// `
// // const  Left = styled.div``
// const  Right = styled.div`
// width: 100%;
// min-height: 100vh;
// align-items: center;
//   flex-direction: column;
// // background: #123456;
// background-image: url("/bg.jpg");


// `
// const Card = styled.div`
//   height: 320px;
//   width: 250px;
//   background-color: #fff;
//   text-align: center;
//   margin: 10px;

//   img {
//     height: 100px;
//     width: 100px;
//     background-color: red;
//     border-radius: 50%;
//     margin-top: 20px;
//   }
// `;
// const Left = styled.div`
// width: 60%;
// height: 690px;
// display: flex;
// align-items: center;
// justify-content: center;
// // background: green;
// `
// const Wrap = styled.div`
// width: 80%;
// height: 400px;
// display: flex;
// border-radius: 13px;
// flex-direction: column;
// align-items: center;
// justify-content: space-evenly;
// box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
// background-color: #ddd;
// @media(max-width:768px){
// /* background-color: paleturquoise; */
// width: 42%;
// height: 400px;
// display: flex;
// align-items: center;

//   }
// @media(max-width:425px){
// /* background-color: paleturquoise; */
// width: 62%;
// height: 400px;
// display: flex;
// align-items: center;

//   }
// `
// const Picture = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// /* background-color: red; */
// `
// const Pic = styled.input`
//   width: 55%;
//   height: 35px;
//     border-radius: 5px;
//     border: 1.5px solid grey;
//     outline: none;
//     outline: none;
//     box-shadow: 0px 1px 5px #a3a3a3;`
// const Mail = styled.input`
//   width: 75%;
//     padding: 15px;
//     border-radius: 5px;
//     margin: 2.5%;
//     border: 1.5px solid grey;
//     outline: none;
//     outline: none;
//     box-shadow: 0px 1px 5px #a3a3a3;`
// const Name = styled.input`
//   width: 75%;
//     padding: 15px;
//     border-radius: 5px;
//     margin: 2.5%;
//     border: 1.5px solid grey;
//     outline: none;
//     outline: none;
//     box-shadow: 0px 1px 5px #a3a3a3;`
// const Button = styled.div`
// :hover>button{
// background-color: white;
// color:black;
// border: 2px solid grey;

//  }
// button{
//     padding: 12px 26px;
// background-color: black;
// color: white;
// margin-top: 30px;
// border: none;
// outline: none;
// border-radius: 7px;
// }
// `
// // const  Container = styled.div``
// // const  Container = styled.div``

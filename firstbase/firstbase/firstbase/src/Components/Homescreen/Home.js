import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db, storage } from "./Base1";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const ImgUpload = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Bio,setBio]= useState("")
  const [avatar, setAvatar] = useState("");
  const [reGet, setReGet] = useState([]);

  const imageUpload = async (e) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, "/myImage", +file.name);
    const storageRef = uploadBytesResumable(fileRef, file);
    getDownloadURL(storageRef.snapshot.ref).then((url) => {
      setAvatar(url);
    });
  };

  const postData = async () => {
    addDoc(collection(db, "imgUp"), {
      name,
      email,
      avatar,
      Bio
    });
    setName("");
    setEmail("");
    setAvatar("");
    setBio("")
  };;

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

  console.log(avatar);

  return (
  <>
  <Headers>
  <Container1>
      <Wrapper1>
      <Navs>
              <Home to="/">Home</Home>
              <Uploadimage to="/Uploadimage">Uploadimage</Uploadimage>
              <Uploads to="/Uploadedimg">Uploads</Uploads>
          </Navs>
          <Image></Image>
    
      </Wrapper1>
  </Container1>
  </Headers>
    <Container>
      <Wrapper>
        <InputDatas>
          <input onChange={imageUpload} type="file" />
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="What is Your Name"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your Email Adress"
          />
          <input
            value={Bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
            placeholder="Input Bio"
          />
      <Button  to="/Uploadedimg">
      <button onClick={postData}>Upload Now</button>
      </Button>
    
        </InputDatas>

        <ViewData>
        
        <Header/>

        </ViewData>
        
      </Wrapper>
    </Container>
  </>
  );
};

export default ImgUpload;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  @media (max-width:320px) {
/* background-color: red; */
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
}
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 100vh;
@media (max-width:320px) {
/* background-color: blue; */
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
}
  @media (min-width:768px) and (max-width:834px) {
    /* background-color: blue; */
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
}
  @media (min-width:325px) and (max-width:428px) {
    /* background-color: blue; */
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
}
  }
`
const InputDatas = styled.div`
  @media (min-width:325px) and (max-width:428px) {
    height: 450px;
  width: 85%;
  /* position: absolute;
  z-index: 1;
  opacity: 0.8; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #eee;
/* top: 90; */
margin-top: 6px;
margin-right: 40px;

}
  @media (min-width:768px) and (max-width:834px) {
    height: 700px;
  width: 85%;
  /* position: absolute;
  z-index: 1;
  opacity: 0.8; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: #eee;
/* top: 90; */
margin-bottom: 900px;
margin-right: 40px;

}
@media (max-width:320px) {
  height: 380px;
  width: 85%;
  /* position: absolute;
  z-index: 1;
  opacity: 0.8; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #eee;
  margin-right: 30px;
  margin-bottom: 60px;

/* top: 90; */
margin-top: 15px;
  }
  height: 400px;
  /* min-height: 100vh; */
  width: 25%;
   margin-top: 140px;
  margin-left: 37px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #db4437; */
background-color: #ddd;

  position: static;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  input {
  
    width: 80%;
    height: 30px;
    margin: 10px 0;
    outline: none;
    font-family: poppins;
    margin-bottom: 25px;
    @media (min-width:320px) and (max-width:324px) {
width: 80%;
      height: 30px;
font-size: 17px;

    }
    @media (min-width:325px) and (max-width:428px) {
width: 80%;
    height: 50px;
font-size: 20px;

    }
    @media (min-width:768px) and (max-width:834px) {
/* border: 1.8px solid black; */
/* border: 1.8px solid grey; */
font-size: 32px;

width: 80%;
    height: 80px;
    }
/* border: 1.8px solid grey; */
/* font-size: 32px; */

  }

`;
const Button = styled(Link)`
  button {
    @media (min-width:768px) and (max-width:834px) {
      background-color: black;
    padding: 22px 36px;
font-size: 34px;

    }
    @media (min-width:325px) and (max-width:428px) {
      background-color: black;

    }
    @media (max-width:320px) {
      background-color: black;

    }
    padding: 12px 26px;
     background-color: #222222;
    margin-top: 30px;
    outline: none;
    color: white;
    margin-bottom: -400px;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 7px;
    /* background-color: #f4b400; */
    color: white;
    border: none;
    font-family: poppins;
    margin: 10px 0;
    transition: all 350ms;
    transform: scale(1);

    :hover {
      transform: scale(0.97);
      cursor: pointer;
    }
  }
`
const ViewData = styled.div`
  @media (min-width:768px) and (max-width:834px) {
    /* min-height: 100vh;
  width: 100%;
  position: relative; */
  display: none;

  }
  @media (min-width:325px) and (max-width:428px) {
    /* min-height: 100vh;
  width: 100%;
  position: relative; */
  display: none;

  }
  @media (max-width:320px) {
    /* position: relative;
    min-height: 100vh;
  width: 100%; */
  display: none;
  }
  min-height: 90vh;
  width: 68%;

  /* background-color: #4285f4; */
background-image: url("/set05.JPG");
background-position:center;
background-repeat:no-repeat;
background-size:cover;

`;
//Header
const Headers = styled.div`
width: 100%;
/* background-color:red; */

`
const Container1 =styled.div`
width: 100%;
height: 50px;

display: none;
@media (min-width:768px) and (max-width:834px) {
  display: flex;
justify-content: center;
align-items: center;
}
@media (min-width:325px) and (max-width:428px) {
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
}
@media (max-width:320px){
  display: flex;
justify-content: center;
align-items: center;
}
`
const Wrapper1 =styled.div`
width: 90%;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
@media (min-width:768px) and (max-width:834px) {
width: 100%;

}
@media (min-width:325px) and (max-width:428px) {
/* background-color: blue; */
width: 100%;

}
@media (max-width:320px){
    width: 100%;

}
`



const Image =styled.div`
width: 42%;
height: 70px;
`
const Navs =styled.div`
width: 42%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
@media (min-width:768px) and (max-width:834px) {
    width: 100%;
}
@media (min-width:325px) and (max-width:428px) {
/* background-color: red; */
width: 100%;

}
@media (max-width:320px){
    width: 100%;
}
`
const Home =styled(Link)`
font-weight: 700;
font-size: 25px;
color: black;
text-decoration: none;
@media (min-width:768px) and (max-width:834px) {
    width: 100%;
font-weight: 700;
font-size: 32px;
}
@media (min-width:325px) and (max-width:428px) {
/* background-color: red; */
width: 100%;
font-weight: 700;
font-size: 22px;
}
@media (max-width:320px){
    width: 100%;
font-weight: 700;
font-size: 21px;
}
`
const Uploadimage =styled(Link)`
font-weight: 700;
font-size:25px;
color: black;
text-decoration: none;
@media (min-width:768px) and (max-width:834px) {
    width: 100%;
font-weight: 700;
font-size: 29px;
margin-left: 170px;
margin-top: 7px;

}
@media (min-width:325px) and (max-width:428px) {
/* background-color: red; */
width: 100%;
font-weight: 700;
font-size: 22px;
margin-left: 34px;
margin-top: 4px;


}
@media (max-width:320px){
    width: 100%;
font-weight: 700;
font-size: 21px;
margin-left: 20px;
}

`
const Uploads =styled(Link)`
font-weight: 700;
font-size: 25px;
color: black;
text-decoration: none;

@media (min-width:768px) and (max-width:834px) {
    width: 100%;
font-weight: 700;
font-size: 32px;
margin-left: 190px;
margin-top: 7px;
}
@media (min-width:325px) and (max-width:428px) {
/* background-color: red; */
width: 100%;
font-weight: 700;
font-size: 22px;
/* margin-left: 34px; */
margin-top: 4px;
margin-left: 50px;
}
@media (max-width:320px){
    width: 100%;
font-weight: 700;
font-size: 21px;
margin-left: 20px;
}
`



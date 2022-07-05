import React from "react";
// import FireBase from "./Component/FireBase/FireBase";
// import Header from"./Components/Header/Header"
// import Body from"./Components/HomeScreen/Body"
// import Consume from "./GetComponent/Homescreen/Consume";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Consume from "./GetComponent/Homescreen/Consume";
import Addcontact from "./GetComponent/Pages/Addcontact";
// import Home from "./GetComponent/Homescreen/Home";

const App = () => {
  return (
  <BrowserRouter>
<Routes>
  <Route path="/" element={<Consume/>}/>
  <Route path="/Addcontact" element={<Addcontact/>}/>
</Routes>
  </BrowserRouter>
  );
};

export default App;

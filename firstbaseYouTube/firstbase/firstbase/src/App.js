import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Homescreen/Home/Body";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Body/>}/>
   <Route path="/SignIn" element={<SignIn/>}/>
   <Route path="/SignUp" element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
  );
};

export default App;

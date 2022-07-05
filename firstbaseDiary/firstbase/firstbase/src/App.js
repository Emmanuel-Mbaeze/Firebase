import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Homescreen/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import Explore from "./Components/Pages/Explore";
import Journals from "./Components/Pages/Journals";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<LandingPage/>}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Register" element={<Register/>}/>
       <Route path="/Homee" element={<Home/>}/>
       <Route path="/Journals" element={<Journals/>}/>
       <Route path="/Explore" element={<Explore/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;

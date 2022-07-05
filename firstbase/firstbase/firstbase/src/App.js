import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import FireBase from "./Component/FireBase/FireBase";
import Body from "./Components/Homescreen/Body"
import Hero from "./Components/Homescreen/Hero";
import Uploadedimg from "./Components/Pages/Uploadedimg";

const App = () => {
  return (
    // <div>
    //   {/* <FireBase /> */}
    //   <Body/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/Uploadimage" element={<Body/>}/>
      <Route path="/Uploadedimg" element={<Uploadedimg/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;

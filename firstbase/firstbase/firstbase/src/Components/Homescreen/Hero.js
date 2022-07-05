import React from 'react'
import styled from "styled-components"
import Header from '../Header/Header'
const Hero = () => {
  return (
    <div>
          <ViewData>
        <Header/>

        </ViewData>
    </div>
  )
}

export default Hero
const ViewData = styled.div`
  @media (min-width:768px) and (max-width:834px) {
    /* min-height: 100vh;
  width: 100%;
  position: relative; */
  display: block;


  }
  @media (min-width:325px) and (max-width:428px) {
    /* min-height: 100vh;
  width: 100%;
  position: relative; */
  display: block;


  }
  @media (max-width:320px) {
    /* position: relative;
    min-height: 100vh;
  width: 100%; */
  display: block;
  }
  min-height: 100vh;
  width: 100%;
  /* display: none; */
  /* background-color: #4285f4; */
background-image: url("/set05.JPG");
background-position:center;
background-repeat:no-repeat;
background-size:cover;

`;

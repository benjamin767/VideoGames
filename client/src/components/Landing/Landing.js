import React from "react";
import landing from '../videogameImg/landing.png';
import { Link } from "react-router-dom";

function Landing() {  
    return (
    <>
      <h1>Welcome, find your favorite videogames</h1>
      <Link to="/home"><div>INGRESAR</div></Link>
      <img src={landing} alt="videogame.png"/>
    </>
  );
}

export default Landing;
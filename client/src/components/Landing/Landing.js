import React from "react";
import landing from '../videogameImg/landing.png';
import { Link } from "react-router-dom";

function Landing() {  
    return (
    <>
      <h1>Welcome, find your favorite videogames</h1>
      <Link to="/home"><div>Get into</div></Link>
      <div><img src={landing} alt="videogame.png"/></div>
    </>
  );
}

export default Landing;
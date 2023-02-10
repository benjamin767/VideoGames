import React from "react";
import joystick_landing from '../videogameImg/joystick_landing.png';
import { Link } from "react-router-dom";
import "./Landing.css"

function Landing() {
  return (
    <>
      <main>
        <div className="container__cover">
          <div className="cover">
            <div className="text">
              <h1>¡Welcome, find your favorite videogames!</h1>
              <Link to="/home"><button className="btn">Get into</button></Link>
            </div>
            
            <div className="joystick">
              <img src={joystick_landing} alt="videogame.png" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
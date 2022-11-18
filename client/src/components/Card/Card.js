import React from 'react';
import { Link } from "react-router-dom";
import imgVG from '../videogameImg/videogame.jpg';

function Card({ videogame: {name, img, id, Genres} }) {

  return (
    <Link to={'/home/'+id}>
      <section>
        <h3>{name}</h3>
        <img 
          src={img || imgVG} 
          alt="videogame img"/>
        {Genres.map(genre => <span> {genre.name}</span>)}
      </section>
    </Link>
  );
}

export default Card;
mport React from 'react';
import { Link } from "react-router-dom";

function Card({ videogame: {name, img, id, Genre} }) {

  return (
    <Link to={'/home/'+id}>
      <section>
        <h3>{name}</h3>
        <img 
          src={img} 
          alt="videogame img"/>
        {Genre.map(genre => <span> {genre.name}</span>)}
      </section>
    </Link>
  );
}

export default Card;
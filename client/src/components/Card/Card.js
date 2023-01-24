import React from 'react';
import { Link } from "react-router-dom";
import imgVG from '../videogameImg/videogame.jpg';
import s from './Card.module.css'

function Card({ videogame: {name, img, id, Genres} }) {

  return (
    <Link to={'/home/'+id}>
      <section className={s.card}>
        <h3 className={s.card__title}>{name}</h3>
         <div className={s.card__img}> <img 
            src={img || imgVG} 
            alt="videogame img"
            className={s.card__img}/> </div>
        <div className={s.card__genres}><span>{Genres.map(genre => genre.name).join(", ")}</span></div>
      </section>
    </Link>
  );
}

export default Card;
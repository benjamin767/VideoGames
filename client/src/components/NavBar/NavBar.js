import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import Filters from '../Filters/Filters.js';
import { getVideogame } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import s from './NavBar.module.css';

function Nav() {
  const dispatch = useDispatch();
  const onSearch = (videogame)=>{
    dispatch(getVideogame(videogame));
  }
  
  return (
    <nav className={s.navBar}>
      <SearchBar onSearch={onSearch}/>
      <Filters/>
      <Link to="/create"> <div className={s.navBar__create}>CREATE A VIDEOGAME</div> </Link>
    </nav>
  );
}

export default Nav;
import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import { getVideogame } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  const dispatch = useDispatch();
  const onSearch = (videogame)=>{
    dispatch(getVideogame(videogame));
  }
  
  return (
    <nav >
      <SearchBar onSearch={onSearch}/>
      <Link to="/create"> <div>CREATE A VIDEOGAME</div> </Link>
    </nav>
  );
}

export default Nav;
import List from '../List/List';
import { getGenres, 
	filterBy, 
	filterByGenres, 
	orderAlphabetically,
	orderByRating } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

function Filters() {
	const dispatch = useDispatch();
	useEffect(() => {
    	dispatch(getGenres());
  	}, [dispatch]);
  	let genres = useSelector(state => state.genres).map(genre => genre.name);
  	let allVideogames = useSelector(state => state.videogames);
  	const handleFilter = (event)=> dispatch(filterBy(event.target.value, allVideogames));
  	const handleGenres = (event)=> dispatch(filterByGenres(event.target.value, allVideogames));
  	const handleAlphabet = (event)=> dispatch(orderAlphabetically(event.target.value, allVideogames));
  	const handleRating = (event)=> dispatch(orderByRating(event.target.value, allVideogames));
	return(
		<>
			<List def="filter" options={["created", "existing"]} handler={handleFilter}/>
			<List def="genres" options={genres} handler={handleGenres}/>
			<List def="alphabet" options={["upward", "fall"]} handler={handleAlphabet}/>
			<List def="rating" options={["max rating", "min rating"]} handler={handleRating}/>
		</>
	);
}

export default Filters;
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
  	let allVideogames = useSelector(state => state.allVideogames);
  	const handlerFilter = (event)=> dispatch(filterBy(event.target.value, allVideogames));
  	const handlerGenres = (event)=> dispatch(filterByGenres(event.target.value, allVideogames));
  	const handlerAlphabet = (event)=> dispatch(orderAlphabetically(event.target.value, allVideogames));
  	const handlerRating = (event)=> dispatch(orderByRating(event.target.value, allVideogames));
	return(
		<>
			<List def="filter" options={["created", "existing"]} handler={handlerFilter}/>
			<List def="genres" options={genres} handler={handlerGenres}/>
			<List def="alphabet" options={["upward", "fall"]} handler={handlerAlphabet}/>
			<List def="rating" options={["max rating", "min rating"]} handler={handlerRating}/>
		</>
	);
}

export default Filters;
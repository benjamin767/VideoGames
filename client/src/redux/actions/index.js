import axios from 'axios';
import {
	GET_ALL_VIDEOGAMES,
	GET_VIDEOGAMES,
	SET_LOADING,
	GET_VIDEOGAME_DETAILS,
	GET_VIDEOGAME,
	GET_GENRES,
	EMPTY_DETAILS,
	FILTER_BY,
	FILTER_BY_GENRES,
	ORDER_ALPHABETICALLY,
	ORDER_BY_RATING,} from './actionsTypes'; 

export const getAllVideogames = () => async (dispatch)=>{
	dispatch(setLoading(true));
	try{
		const allVideogames = await axios.get(`/videogames`);
		const videogames = [...allVideogames.data];
		dispatch({type: GET_ALL_VIDEOGAMES, payload: allVideogames.data});
		dispatch({type: GET_VIDEOGAMES, payload: videogames});
	} catch(err){
		console.log(err);
	}
	dispatch(setLoading(false));
};

export const setLoading = boolLoading => dispatch => {
	dispatch({
		type: SET_LOADING,
		payload: boolLoading,
	});
};

export const getVideoDetails = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	try{
		let videoDetail = await axios.get(`/videogames/${id}`);
		dispatch({type: GET_VIDEOGAME_DETAILS, payload: videoDetail.data});
	}catch(err){
		console.log(err);
	}
	dispatch(setLoading(false));
};

export const getVideogame = (videogame) => async (dispatch)=>{
	dispatch(setLoading(true));
	dispatch(emptyDetails());
	try{
		videogame = await axios.get(`/videogames?name=${videogame}`);
		dispatch({type: GET_VIDEOGAME, payload: videogame.data});
	}catch(err){
		console.log(err);
	}
	dispatch(setLoading(false));
};

export const getGenres = () => async (dispatch)=>{
	try{
		let genres = await axios.get(`/genres`);
		dispatch({type: GET_GENRES, payload: genres.data});
	}catch(err){
		console.log(err);
	}
};

export const emptyDetails = () => {
	return {type: EMPTY_DETAILS};
};

export const filterBy = (option,videogames) => {
	if(option === "default") return {type: FILTER_BY, payload: videogames};
	
	if(option === "existing"){
		videogames = videogames.filter(videogame => videogame.hasOwnProperty("api"));
		return {type: FILTER_BY, payload: videogames};
	}
	videogames = videogames.filter(videogame => !videogame.hasOwnProperty("api"));
	return {type: FILTER_BY, payload: videogames};
};

export const filterByGenres = (option,videogames) => {
	if(option === "default") return {type: FILTER_BY_GENRES, payload: videogames};

	videogames = videogames.filter(videogame => {
		let flag = false;
		for(let genre of videogame.Genres){
			if(genre.name === option){
				flag = true;
				break;
			}
		}
		if(flag) return videogame;
		return false;
	});
	return {type: FILTER_BY_GENRES, payload: videogames};
};

export const orderAlphabetically = (option,videogames) => {
	if(option === "default") return {type: ORDER_ALPHABETICALLY, payload: videogames};
	let videogamesCopy = [...videogames]
	videogamesCopy.sort(function (a, b) {
  		if (a.name > b.name) return 1;
  		if (a.name < b.name) return -1;
  		return 0;
	});
	if(option === "upward") return {type: ORDER_ALPHABETICALLY, payload: videogamesCopy};
	return {type: ORDER_ALPHABETICALLY, payload: videogamesCopy.reverse()};
};

export const orderByRating = (option,videogames) => {
	if(option === "default") return {type: ORDER_BY_RATING, payload: videogames};
	let videogamesCopy = [...videogames];
	videogamesCopy.sort(function(a, b) {
  		return a.rating - b.rating;
	});
	if(option === "max rating") return {type: ORDER_BY_RATING, payload: videogamesCopy.reverse()};
	if(option === "min rating") return {type: ORDER_BY_RATING, payload: videogamesCopy};

};
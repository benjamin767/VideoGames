import axios from 'axios';
import {
	GET_ALL_VIDEOGAMES,
	GET_VIDEOGAMES,
	SET_LOADING,
	GET_VIDEOGAME_DETAILS,
	GET_VIDEOGAME,} from './actionsTypes'; 

export const getAllVideogames = () => async (dispatch)=>{
	dispatch(setLoading(true));
	try{
		const allVideogames = await axios.get(`http://localhost:3001/videogames`);
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
		let videoDetail = await axios.get(`http://localhost:3001/videogames/${id}`);
		dispatch({type: GET_VIDEOGAME_DETAILS, payload: videoDetail.data});
	}catch(err){
		console.log(err);
	}
	dispatch(setLoading(false));
};

export const getVideogame = (videogame) => async (dispatch)=>{
	dispatch(setLoading(true));
	try{
		videogame = await axios.get(`http://localhost:3001/videogames?name=${videogame}`);
		dispatch({type: GET_VIDEOGAME, payload: videogame.data});
	}catch(err){
		console.log(err);
	}
	dispatch(setLoading(false));
};
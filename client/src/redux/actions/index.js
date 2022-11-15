import axios from 'axios';
import {
	GET_ALL_VIDEOGAMES,
	GET_VIDEOGAMES,
	SET_LOADING,} from './actionsTypes' 

export const getAllVideogames = () => async (dispatch)=>{
	dispatch(setLoading(true));
	try{
		const allVideogames = await axios.get(`localhost:3001/videogames`);
		const videogames = [...allVideogames];
		dispatch({type: GET_ALL_VIDEOGAMES, payload: allVideogames});
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
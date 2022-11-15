import {
	GET_ALL_VIDEOGAMES,
	GET_VIDEOGAMES,
	SET_LOADING,
	GET_VIDEOGAME_DETAILS,} from '../actions/actionsTypes' 

const initialState = {
	allVideogames: [],
	videogames: [],
	videoDetails: {},
	isLoading: false,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_VIDEOGAMES:
			return {...state, allVideogames: action.payload};
		case GET_VIDEOGAMES:
			return {...state, videogames: action.payload};
		case SET_LOADING:
			return {...state, isLoading: action.payload};
		case GET_VIDEOGAME_DETAILS:
			return {...state, videoDetails: action.payload};
		default: return state;
	}
}

export default rootReducer;
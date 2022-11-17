import {
	GET_ALL_VIDEOGAMES,
	GET_VIDEOGAMES,
	SET_LOADING,
	GET_VIDEOGAME_DETAILS,
	GET_VIDEOGAME,
	GET_GENRES,
	EMPTY_DETAILS,
	FILTER_BY,
	FILTER_BY_GENRES,} from '../actions/actionsTypes' 

const initialState = {
	allVideogames: [],
	videogames: [],
	videoDetails: {},
	isLoading: false,
	genres: [],
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
		case GET_VIDEOGAME:
			return {...state, videogames: action.payload};
		case GET_GENRES:
			return {...state, genres: action.payload};
		case EMPTY_DETAILS:
			return {...state, videoDetails: {}};
		case FILTER_BY:
			return {...state, videogames: action.payload};
		case FILTER_BY_GENRES:
			return {...state, videogames: action.payload};
		default: return state;
	}
}

export default rootReducer;
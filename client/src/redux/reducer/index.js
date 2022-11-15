import {
	GET_ALL_VIDEOGAMES,
	GET_VIDEOGAMES,
	SET_LOADING,} from '../actions/actionsTypes' 

const initialState = {
	allVideogames: [],
	videogames: [],
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
		default: return state;
	}
}

export default rootReducer;
import React, { useEffect, useState } from "react";
import List from '../List/List.js';
import { getGenres } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import s from "./CreateVideogame.module.css"

export function validate(state) {
	let errors = {};
	if (!state.name) {
	  errors.name = 'Name is required';
	}
	if (!state.description) {
	  errors.description = 'Description is required';
	}
	if (!state.rating) {
		errors.rating = 'Rating is required';
	} else if (state.rating > 5 || state.rating < 1){
		errors.rating = 'Rating must be from 1 to 5';
	}
	if (!state.released) {
		errors.released = 'Released is required';
	}
	if(!state.platform.length){
		errors.platform = 'Platform is required';
	}
	if(!state.genres.length){
		errors.genres = 'Genre is required';
	}

	return errors;
};  

function CreateVideogame(){
	const dispatch = useDispatch();
	useEffect(() => {
    	dispatch(getGenres());
  	}, [dispatch]);
	const [state, setState] = useState({
		name: "",
		description: "",
		rating: "",
		released: "",
		platform: [],
		genres: [],
	});
	const [final, setFinal] = useState("");
	const [errors, setErrors] = useState({});
  	const genresOptions = useSelector(state => state.genres).map(genre => genre.name);
	const platformsOptions = ["PC","PlayStation 5","PlayStation 4","Xbox One","Xbox Series S/X]",
	"Nintendo Switch","iOS","macOS","Linux","Xbox 360","PlayStation 3","PlayStation 2",
	"PlayStation","Nintendo 64","Atari 7800","Genesis","Neo Geo","Web"];

	const handlePlatform = (event)=>{
		let platformOp = event.target.value;
		if(platformOp === "default") platformOp = "Other";
		let platformsSet = new Set(state.platform);
		platformsSet.add(platformOp);
		state.platform = [...platformsSet];
		setState({...state,[event.target.name]:[...state.platform]});
		setErrors(validate({...state, [event.target.name]:[...state.platform]}));
	};

	const handleGenres = (event)=>{
		let genre = event.target.value;
		if(genre === "default") genre = "Other";
		let genresSet = new Set(state.genres);
		genresSet.add(genre);
		state.genres = [...genresSet];
		setState({...state, [event.target.name]:[...state.genres]});
		setErrors(validate({...state, [event.target.name]:[...state.genres]}));
	};
	
	const handleChange = (e)=>{
		setState({...state,[e.target.name]: e.target.value});
		setErrors(validate({...state, [e.target.name]: e.target.value}));
	};

	const handleDeleteGenre = (event, genre)=>{
		event.preventDefault();
		state.genres = state.genres.filter(p => p !== genre);
		setState({...state, [event.target.name]: [...state.genres]});
		setErrors(validate({...state, [event.target.name]:[...state.genres]}));
	};

	const handleDeletePlatform = (event, pf)=>{
		event.preventDefault();
		state.platform = state.platform.filter(p => p !== pf);
		setState({...state, [event.target.name]: [...state.platform]});
		setErrors(validate({...state, [event.target.name]:[...state.platform]}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post(`http://localhost:3001/videogames`,{
			name: state.name,
			description: state.description,
			genres: state.genres,
			platform: state.platform,
			released: state.released,
			rating: state.rating,
		})
			.then(res => setFinal(res.data.detail))
			.catch(res => setFinal(res.message))
	}

	return(
		<>
			<form onSubmit={handleSubmit} className={s.formRegister}>
			<h3>Create Videogame</h3>
				<div>
						
					<input className={s.controls} type="text" name="name" value={state.name} onChange={handleChange} placeholder="name..."/> 
					{errors.name && (<p className={s.error}>{errors.name}</p>)} 
					
					<textarea className={s.controls} name="description" value={state.description} onChange={handleChange}
					placeholder="description..."/> 
					{errors.description && (<p className={s.error}>{errors.description}</p>)} 
					
					<div className={s.controls}> 
						<label>Platforms: </label> 
						<List def="Other" options={platformsOptions} handler={handlePlatform} name="platform"/>
						{errors.platform && (<p className={s.error}>{errors.platform}</p>)} 
						{state.platform.map((p,i) => <div key={i} className={s.selection}>
							<p>{p}</p>
							<button onClick={(event)=>handleDeletePlatform(event,p)}>x</button>
						</div>)}
					</div>
					<div className={s.controls}> 
						<label>Genres: </label> 
						<List def="Other" options={genresOptions} handler={handleGenres} name="genres"/> 
						{errors.genres && (<p className={s.error}>{errors.genres}</p>)} 
						{state.genres.map((genre,i) => <div key={i} className={s.selection}>
							<p>{genre}</p>
							<button onClick={(event)=>handleDeleteGenre(event,genre)}>x</button>
						</div>)}
					</div>
					
					<input className={s.controls} type="number" name="rating" value={state.rating} onChange={handleChange}
					placeholder="rating (1-5)..."/>
					{errors.rating && (<p className={s.error}>{errors.rating}</p>)}  
					
					<label>Released</label> 
					<input className={s.controls} type="date" name="released" value={state.released} onChange={handleChange}/> 
					{errors.released && (<p className={s.error}>{errors.released}</p>)} 
					
					<input className={s.button} type="submit" value="CREATE"/>
					{final && (<p className={s.error}>{final}</p>)}
				</div>
			</form>
		</>
	);
}

export default CreateVideogame;
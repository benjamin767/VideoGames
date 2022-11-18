import React, { useEffect } from "react";
import List from '../List/List.js';
import { getGenres } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function CreateVideogame(){
	const dispatch = useDispatch();
	useEffect(() => {
    	dispatch(getGenres());
  	}, [dispatch]);
  	const genres = useSelector(state => state.genres).map(genre => genre.name);

	return(
		<>
			<div>
				<div> <label>Name:</label> <input/> </div>
				<div> <label>Description:</label> <input/> </div>
				<div> <label>Platforms:</label> <input/> </div>
				<div> <label>Genres:</label> <List options={genres}/> </div>
				<div> <label>Rating:</label> <input type="number" min="1" max="5"/> </div>
				<div> <label>Released:</label> <input/> </div>
				<input type="submit" value="CREATE"/>
			</div>
		</>
	);
}

export default CreateVideogame;
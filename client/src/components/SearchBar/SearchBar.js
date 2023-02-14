import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({onSearch}) {
	let [videogame, setVideogame] = useState("");
	const handerVideogame = (event)=>{
		setVideogame(event.target.value)
	}
	return (
		<form onSubmit={(e) => {
        	e.preventDefault();
       	 	onSearch(videogame);
      	}}>

        	<input
          		type="text"
          		placeholder="Videogame..."
        		value={videogame}
        		onChange={handerVideogame}
				className="input_search"
        	/>
        	<input 
				type="submit" 
				value="Search"
				className="input_btn" 
			/> 
      	</form>
	);
}
import React, { useState } from "react";

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
          		placeholder="Find your favorite videogame"
        		value={videogame}
        		onChange={handerVideogame}
        	/>
        	<input type="submit" value="Search" /> 
      	</form>
	);
}
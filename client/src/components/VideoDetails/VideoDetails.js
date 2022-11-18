import React from 'react';

function VideoDetails({details: {id,name,Genres,description,img,released,platform,rating}}) {
	platform = platform && platform.toString();

	return (
	<>	
		<div>
			<div>
				<h2>{name}</h2>
				{description}
			</div>
			<div>
				<h3>PLATFORM</h3>
				<p>{platform}</p>
			</div>
			<div>
				<h3>GENRES</h3>
				{Genres ? <p>{Genres.map(genre => genre.name).toString()}</p>:<p>Cargando...</p>}
			</div>
			<div>
				<h3>RATING</h3>
				<p>{rating}</p>
			</div>
			<div>
				<h3>RELEASED</h3>
				<p>{released}</p>
			</div>
		</div>
	</>
	);
}

export default VideoDetails
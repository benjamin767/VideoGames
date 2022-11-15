import React from 'react';

function VideoDetails({details: {id,name,Genre,description,img,released,platform,rating}}) {
	return (
	<>
		<h2>{name}</h2>
	</>
	);
}

export default VideoDetails
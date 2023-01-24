import React from 'react';
import s from './VideoDetails.module.css';
import videogameImg from '../videogameImg/videogame.jpg'

function createMarkup(content) {
	return {__html: content};
}

function VideoDetails({details: {id,name,Genres,description,img,released,platform,rating}}) {
	platform = platform && platform.toString();

	return (
	<><div className={s.videoDetails}>
		<div className={s.videoDetails__title}><h2>{name}</h2></div>
		<div className={s.videoDetails__img}>
			<img src={img || videogameImg} alt="videogame-img" />
		</div>
		<div className={s.videoDetails__data}>
			<h3>PLATFORM</h3>
			<p>{platform}</p>
			<h3>GENRES</h3>
			{Genres && <p>{Genres.map(genre => genre.name).toString()}</p>}
			<h3>RATING</h3>
			<p>{rating}</p>
			<h3>RELEASED</h3>
			<p>{released}</p>
			</div>
			<div className={s.videoDetails__description} dangerouslySetInnerHTML={createMarkup(description)}></div>
	</div> </>
	);
}

export default VideoDetails
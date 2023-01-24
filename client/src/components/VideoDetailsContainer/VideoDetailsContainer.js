import React, { useEffect } from "react";
import { getVideoDetails } from "../../redux/actions";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../Spinner/Spinner';
import VideoDetails from '../VideoDetails/VideoDetails';
import s from './VideoDetailsContainer.module.css';

function VideoDetailsContainer() {
	const dispatch = useDispatch();
  	let { id } = useParams();
  	useEffect(() => {
    	dispatch(getVideoDetails(id));
  	}, [dispatch,id]);
  	const isLoading = useSelector(state => state.isLoading);
  	const videoDetails = useSelector(state => state.videoDetails);

	return (
    	<div className={s.videoDetailsContainer}>
      		{isLoading ? <Spinner/> : <VideoDetails details={videoDetails}/>}
   		</div>
  	);
}

export default VideoDetailsContainer;
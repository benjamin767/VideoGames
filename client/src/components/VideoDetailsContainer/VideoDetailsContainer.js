import React, { useEffect } from "react";
import { getVideoDetails } from "../../redux/actions";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../Spinner/Spinner';
import VideoDetails from '../VideoDetails/VideoDetails';

function VideoDetailsContainer() {
	let dispatch = useDispatch();
  	let { id } = useParams();
  	useEffect(() => {
    	dispatch(getVideoDetails(id));
  	}, [dispatch]);
  	const isLoading = useSelector(state => state.isLoading);
  	const videoDetails = useSelector(state => state.videoDetails);

	return (
    	<>
      		{isLoading ? <Spinner/> : <VideoDetails details={videoDetails}/>}
   		</>
  	);
}

export default VideoDetailsContainer;
import React, {useEffect} from 'react'
import './Library.css'
import VideoCard from './VideoCard';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Library() {
//fetch to the table get the data map 
const videoReducer = useSelector((store) => store.videoReducer);
const dispatch = useDispatch();

useEffect(() => {
    dispatch({
        type: 'FETCH_VIDEOS'
    });
}, []);


    return (
        <div className="library">
            <h2>Corporate Library</h2>
            <div className="library__videos">
           {videoReducer && videoReducer.map(video => {
               return <VideoCard key={video.key} video={"https://corp-collab.s3.us-east-2.amazonaws.com/"+video.key} 
        //    title={video.title}
           />})}

            </div>
        </div>
    )
}

export default Library

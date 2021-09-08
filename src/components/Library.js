import React, {useEffect} from 'react'
import './Library.css'
import VideoCard from './VideoCard';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Library() {
//fetch to the table get the data map 
const video = useSelector((store) => store.video);
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
           {video && video.map(video => {
               return <VideoCard key={video.key} video={"https://corp-collab.s3.us-east-2.amazonaws.com/"+video.key} 
           
           />})}
           

            </div>
        </div>
    )
}

export default Library

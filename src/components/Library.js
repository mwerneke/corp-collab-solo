import React, { useEffect } from "react";
import "./Library.css";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Library() {
  //fetch to the table get the data map
  const user = useSelector((store) => store.user);
  const videoReducer = useSelector((store) => store.videoReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_VIDEOS",
    });
  }, []);

  const handleDelete =(event) =>{
    console.log('**VIDEO**', videoReducer.key);
    
    // let id=videoReducer.key;

    dispatch({
      //**ADDED */
      type: "DELETE_VIDEO", 
      payload: event
        
      
    });
  }



  return (
    <div className="library">
      <h2>Corporate Library</h2>
      <div className="library__videos">
        {videoReducer &&
          videoReducer.map((videoReducer) => {
            return (
              <VideoCard
                key={videoReducer.key}
                video={
                  "https://corp-collab.s3.us-east-2.amazonaws.com/" +
                  videoReducer.key
                }
                title={videoReducer.question}
                dept={videoReducer.department}
                button = {user.auth_level === 'ADMIN' ?
                <>
                <button
                onClick={(event) =>handleDelete (videoReducer.key)}
                className="Btn"
                >Delete</button>
                </>
                :
                <>
                </>
                }
               
              
              />
              
           
                      
            );
          })}
           
          
           
      </div>
    </div>
  );
}

export default Library;

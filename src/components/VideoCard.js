import React from "react";
import "./VideoCard.css";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function VideoCard({ dept, title, video, button }) {
  const videoReducer = useSelector((store) => store.videoReducer);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // const handleDelete =(event) =>{
  //   console.log('**VIDEO**', videoReducer[0].id);
  //   let id=videoReducer.id;

  //   dispatch({
  //     //**ADDED */
  //     type: "DELETE_VIDEO",
  //     payload: id

  //   });
  // }
  

  return (
    <div className="videoCard">
      <ReactPlayer
        controls
        className="vid"
        url={video}
        width="250"
        height="140"
      />

      <br />
      <p>{title}</p>
      <p>Dept: {dept}</p>
      <button className="Btn">{button}</button>
      {/* <div className="delete">
      {user.auth_level === 'ADMIN' ?
              <>
              <button
              onClick={handleDelete}
              className="Btn"
              >Delete</button>
              </>
              :
              <>
              </>
              }
              </div> */}

      {/* <iframe className="vid" src="https://player.vimeo.com/video/115842225?h=5d80e3cb1c" width="250" height="140" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
      {/* <iframe className= 'vidoeo__video' src={video}/> */}
      {/* <img className="videoCard__thumbnail" src={image} alt='' /> */}

      <div className="videoCard__text"></div>
    </div>
  );
}

export default VideoCard;

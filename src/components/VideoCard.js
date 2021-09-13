import React from "react";
import "./VideoCard.css";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

function VideoCard({ dept, title, video }) {

  const user = useSelector((store) => store.user);

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
      <div className="delete">
      {user.auth_level === 'ADMIN' ?
              <>
              <button>Delete</button>
              </>
              :
              <>
              </>
              }
              </div>

      {/* <iframe className="vid" src="https://player.vimeo.com/video/115842225?h=5d80e3cb1c" width="250" height="140" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
      {/* <iframe className= 'vidoeo__video' src={video}/> */}
      {/* <img className="videoCard__thumbnail" src={image} alt='' /> */}

      <div className="videoCard__text"></div>
    </div>
  );
}

export default VideoCard;

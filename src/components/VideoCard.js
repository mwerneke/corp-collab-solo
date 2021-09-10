import React from "react";
import "./VideoCard.css";
import ReactPlayer from "react-player";

function VideoCard({ dept, title, video }) {
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

      {/* <iframe className="vid" src="https://player.vimeo.com/video/115842225?h=5d80e3cb1c" width="250" height="140" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
      {/* <iframe className= 'vidoeo__video' src={video}/> */}
      {/* <img className="videoCard__thumbnail" src={image} alt='' /> */}

      <div className="videoCard__text"></div>
    </div>
  );
}

export default VideoCard;

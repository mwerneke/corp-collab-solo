import React from "react";
import "./VideoCard.css";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function VideoCard({ dept, title, video, button }) {
  const videoReducer = useSelector((store) => store.videoReducer);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();


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


      <div className="videoCard__text"></div>
    </div>
  );
}

export default VideoCard;

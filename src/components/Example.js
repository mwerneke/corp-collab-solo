
import React, { useRef } from "react";
// import Navbar from "./Navbar";
import Pill from "./pill";
import "./example.css"
import useScreenRecorder from "use-screen-recorder";
import {saveAs} from "file-saver";
import axios from 'axios'
import { nanoid } from "nanoid";
import {useDispatch} from 'react-redux'  //**Added */

const Example = () => {
  const dispatch = useDispatch(); //**Added */
  const {
    startRecording,
    pauseRecording,
    blob,
    blobUrl,
    resetRecording,
    resumeRecording,
    status,
    stopRecording,
  } = useScreenRecorder({ audio: true });

  const videoRef = useRef();

  const handleDownload = () => {
    saveAs(blobUrl, "video.webm");
  }

  const handleUpload = async () => {
    const key = `${nanoid()}.webm`

    const {data} = await axios.post('http://localhost:5522/api/storage/presignedUrl', {
      key,
    })
    const {url} = data

    await axios({
      url,
      method: 'put',
      data: blob,
      headers: {
        'Content-Type': 'video/webm',
        'content-disposition': 'attachment',
      },
      onUploadProgress: (e) => {
        const progress = e.loaded / e.total
        console.log({progress})
      },
    })

    alert(`Upload done! ${key}`)

      //NEED TO ACTIVATE ON UPLOAD
      
     dispatch({   //**ADDED */
       type: 'POST_VIDEO',
       payload: key
     })   
      
    
    
    // TODO: Save key variable to database axios call to server then post to DB
  }

  return (
    
    <div id="container">
       <tr className="tablerow">ttfffffffffffff</tr>
      {/* <Navbar /> */}
      <h2 className="title">Video Fulfillment</h2>
      <div className="wrapper">
        <div className="pills">
          <Pill style={{backgroundColor: status === 'recording'?'green':'inherit' }} title="Status" value={status} />
          <Pill
            style={{ flexGrow: 1 }}
            title="Blob URL"
            value={blobUrl || "Waiting..."}
          />
        </div>

        <div>
          <video 
          style={{width:'100%'}}
            ref={videoRef}
            src={blobUrl}
            // poster={process.env.PUBLIC_URL + "/poster.png"}
            controls
            autoPlay
          />
        </div>

        <div className="buttons">
          {(status === "idle" || status === "error") && (
            <button onClick={startRecording}>Start recording</button>
          )}
         
          {(status === "recording"   || status === "paused") && (
            <button onClick={stopRecording}>Stop recording</button>
          )}
          
          {(status === "recording" || status === "paused") && (
            <button
              onClick={() =>
                status === "paused" ? resumeRecording() : pauseRecording()
              }
            >
              {status === "paused" ? "Resume recording" : "Pause recording"}
            </button>
          )}
          {status === "stopped" && (
            <>
            <button
              onClick={() => {
                resetRecording();
                videoRef.current.load();
              }}
            >
              Reset recording
            </button>
            <button onClick={handleDownload}>Download</button>
            <button onClick={handleUpload}>Upload</button>
            </>
          )}
        </div>
      </div>

    
    </div>
  );
};
export default Example;

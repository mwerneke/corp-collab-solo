import React, { useRef } from "react";
import Pill from "./pill";
import "./example.css";
import useScreenRecorder from "use-screen-recorder";
import { saveAs } from "file-saver";
import axios from "axios";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux"; //**Added */
import { useHistory } from "react-router-dom";

const Example = () => {
  const dispatch = useDispatch(); //**Added */
  const ticketDetailReducer = useSelector((store) => store.ticketDetailReducer);
  
  
  const history = useHistory();
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
  };

  const handleUpload = async (details) => {
    const key = `${nanoid()}.webm`;
    const question = ticketDetailReducer[0].question;
    const department = ticketDetailReducer[0].department;
    // const title = `${FetchDetail()}` //TESTING
    const { data } = await axios.post(
      "http://localhost:5522/api/storage/presignedUrl",
      {
        key,
        question,
        department,
      }
    );
    const { url } = data;

    await axios({
      url,
      method: "put",
      data: blob,
      headers: {
        "Content-Type": "video/webm",
        "content-disposition": "attachment",
      },
      onUploadProgress: (e) => {
        const progress = e.loaded / e.total;
        console.log({ progress });
      },
    });

    alert(`Your upload is complete. ${key}`);

    //NEED TO ACTIVATE ON UPLOAD

    dispatch({
      //**ADDED */
      type: "POST_VIDEO", 
      payload: {
        key,
        question: ticketDetailReducer[0].question,
        department: ticketDetailReducer[0].department,
      },
    });
    let id=ticketDetailReducer[0].id;
    dispatch({
      //**ADDED */
      type: "DELETE_OPENREQUEST", 
      payload: id
        
      
    });
    


      
     
  
    history.push("/library");
  };

  // {key, question:ticketDetailReducer[0].question, department:ticketDetailReducer[0].department
  // }

  //add back <FetchDetail/> remove store

  return (
    <div id="container">
      {/* <FetchDetail /> */}
      {/* <Navbar /> */}
      {ticketDetailReducer &&
        ticketDetailReducer.map((item) => {
          return (
            <tr key={item.id}>
              <div>
                <h4 className="question">Tutorial Request: {item.question}</h4>
              </div>
              <div>
                <h4 className="department">Department: {item.department}</h4>
              </div>
            </tr>
          );
        })}
      <div className="wrapper">
        <div className="pills">
          <Pill
            style={{
              backgroundColor: status === "recording" ? "red" : "inherit",
            }}
            title="Status"
            value={status}
          />
          {/* <Pill
            style={{ flexGrow: 1 }}
            title="Blob URL"
            value={blobUrl || "Waiting..."}
          /> */}
        </div>

        <div>
          <video
            style={{ width: "100%" }}
            ref={videoRef}
            src={blobUrl}
            // poster={Logo}
            controls
            autoPlay
          />
        </div>

        <div className="buttons">
          {(status === "idle" || status === "error") && (
            <button onClick={startRecording}>Start recording</button>
          )}

          {(status === "recording" || status === "paused") && (
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

import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
// import { useState } from 'react';
// import { AttachFile, AudioTrack, Description, PictureAsPdf, Theaters } from '@material-ui/icons';
import "./dropZone.css";
function dropZone(){

class DropzoneAreaExample extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  } //End of Code

//   const handlePreviewIcon = (fileObject, classes) => {
//     const {type} = fileObject.file
//     const iconProps = {
//       className : classes.image,
//     }
  
//     if (type.startsWith("video/")) return <Theaters {...iconProps} />
//     if (type.startsWith("audio/")) return <AudioTrack {...iconProps} />
  
//     switch (type) {
//       case "application/msword":
//       case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
//         return <Description {...iconProps} />
//       case "application/pdf":
//         return <PictureAsPdf {...iconProps} />
//       default:
//         return <AttachFile {...iconProps} />
//     }
//   }
  
//   const [fileObjects, setFileObjects] = useState([]);
  
//   <DropzoneAreaBase
//     fileObjects={fileObjects}
//     onAdd={newFileObjs => {
//       console.log('onAdd', newFileObjs);
//       setFileObjects([].concat(fileObjects, newFileObjs));
//     }}
//     onDelete={deleteFileObj => {
//       console.log('onDelete', deleteFileObj);
//     }}
//     getPreviewIcon={handlePreviewIcon}
//   />





  render(){
    return (
        <>
        <div className="drop">
      <DropzoneArea 
        onChange={this.handleChange.bind(this)}
        
        />
        
        </div>
        
        </>
    )
  }
}
}
 
export default dropZone;
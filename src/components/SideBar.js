import React from 'react'
import './Sidebar.css'
import SideBarRow from './SideBarRow'
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import HomeIcon from '@material-ui/icons/Home';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useHistory } from 'react-router-dom';

function SideBar() {
    const history = useHistory();
    
    const goToLibrary =()=>{
        history.push('/library')  // HOW CAN I LINK can I pass it as prop
    }
    const goToHome=()=>{
        history.push('/home')
    }
    const addToLibrary=()=>{
        history.push('/addtolibrary')
    }
    const addRequest =() =>{
        history.push('/addRequests')
    }
    const openRequest=() =>{
        history.push('/openrequests')
    }

    return (
        <div className="sidebar">
            
            <SideBarRow Icon= {HomeIcon} title="Home" link={goToHome}/>
            <SideBarRow Icon={AssistantPhotoIcon} title="Add Requests" link={addRequest}/>
            <SideBarRow Icon={AnnouncementIcon} title =" Open Requests"link={openRequest}/>
            <SideBarRow Icon={VideoCallIcon} title ="Add to Library"link={addToLibrary}/>
            <SideBarRow Icon={VideoLibraryIcon} title="Library"link={goToLibrary}/>
            <hr/>
        </div>
    )
}

export default SideBar
// 1:24
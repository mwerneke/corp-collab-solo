import React from 'react'
import './Library.css'
import VideoCard from './VideoCard';

function Library() {
    return (
        <div className="library">
            <h2>Corporate Library</h2>
            <div className="library__videos">
            <VideoCard
            video= "https://vimeo.com/588408991/0424f84a23"
            title= "Redux"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/577633350/cee9254cbc"
            title= "Bonus Calculator"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/588538873/c15aca1038"
            title= "Redux Logger Debugger"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/588043607/6bfe101073"
            title= "React Router"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/585878767/a660823ae0"
            title= "Conditional Rendering"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/585946671/491795ad3e"
            title= "Props"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/585081933/1a893ffb64"
            title= "React State"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/585033559/3bf58fc958"
            title= "React Components"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/585432239/f1e1f5305c"
            title= "React Forms and Input"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/585432239/f1e1f5305c"
            title= "React Forms and Input"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/585432239/f1e1f5305c"
            title= "React Forms and Input"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />
            <VideoCard
            video= "https://vimeo.com/585432239/f1e1f5305c"
            title= "React Forms and Input"
            // image="https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
            />

            </div>
        </div>
    )
}

export default Library

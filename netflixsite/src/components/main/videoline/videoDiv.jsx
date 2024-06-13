
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Video from './video'
import VideoDiva from '../../../assets/videoData'




 function VideoDiv(props) {
  const {setActiveVideo}=props
  const [videos,setVideos]=useState(VideoDiva);


  return (
    videos.map(video=>(<Video key={video.id} video={video}>videoDiv</Video>))
  )
}
export default VideoDiv
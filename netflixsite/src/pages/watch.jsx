/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import VideoOne from '../components/main/homeVideoline/video';


function Watch(props) {
  const {activeVideo,setActiveVideo}=props;
  function handleOver(){

  
  setActiveVideo(activeVideo);
}
  return (
    <>
    <VideoOne onMouseOver={()=>handleOver()}>watch</VideoOne>
    </>
  )
}

export default Watch
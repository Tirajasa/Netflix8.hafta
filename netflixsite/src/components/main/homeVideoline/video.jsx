/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components'


const VideoOut=styled.div`
border: 1px solid black;
cursor: pointer;
`;

const VideoPart=styled.video`
width:16%;
padding-top: 56.25%;
`;

          function VideoOne(props) {



  const {setActiveVideo,activeVideo,video}=props;
  let history=useHistory();
   const {id}=activeVideo;
  function handleStart(movie){
    // const watchM=movies.find((m)=>{m.category.movies.title===movie.title})
  
    setActiveVideo(movie);
  history.push(`/watch/${movie.movies.id}`)
}
  
  
  // function keepWatchingLine(movie){
  //   movie=isClicked?movie:null;
  // }

  return (
    <>
        <VideoOut onClick={()=>handleStart(video)}>
            <VideoPart src={video.movies.url} controls/>
        </VideoOut>
   </>
  )
}

export default VideoOne
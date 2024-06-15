/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import VideoDiv from './videoDiv'
import styled from 'styled-components';
import movieData from '../../../assets/movieData';
import  VideoDiva  from '../../../assets/videoData';

// const CardLine=styled.div`
// height:16%
// `;


function VideoLine(props) {
  const {setActiveVideo,activeVideo,suggestions,setSuggestions}=props;
 const [movies]=useState([...movieData,...VideoDiva]);
  return (
    <>
      {/* <CardLine> */}
        <VideoDiv movies={movies} suggestions={suggestions}
         setSuggestions={setSuggestions} activeVideo={activeVideo} 
         setActiveVideo={setActiveVideo} >
        videoLine
        
        </VideoDiv>
      {/* </CardLine> */}
    </>
  )
}

export default VideoLine;
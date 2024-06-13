/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

const VideoOut=styled.div`
border: 1px solid black;
`;

const VideoPart=styled.video`
width:16%;
aspect-ratio: 16/9;
`;
const Recom=styled.h3`

`;
function VideoOne() {
  return (
    <>
        <VideoOut>
            <VideoPart>video
                <Recom>Beni Sec!</Recom>
            </VideoPart>
    </VideoOut>
   </>
  )
}

export default VideoOne
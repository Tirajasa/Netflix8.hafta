
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import VideoOne from './video';





 function VideoDiv(props) {
  const {setActiveVideo,activeVideo,setSuggestions,suggestions,movies}=props
 
  
  function handleSuggest(movie){
    const recom=movies.filter(category=> category.category===movie.category)
    setSuggestions([...suggestions,recom]);
  }

  return (
    movies.map(video=>(<VideoOne key={video.id} video={video.url} activeVideo={activeVideo}
       setActiveVideo={setActiveVideo}/>))
  )
}
export default VideoDiv
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import VideoLine from '../components/main/homeVideoline/videoLine'
import { useState } from 'react';

function Home(props) {
  const {setActiveVideo,activeVideo,activeP}=props;
  const [suggestions,setSuggestions]= useState([]);
  
 const {name}=activeP;
  const isim = activeP ? activeP.name : 'Tobias';
  
  return (
    <VideoLine setSuggestions={setSuggestions} suggestions={suggestions} 
    activeVideo={activeVideo} setActiveVideo={setActiveVideo}
     >Home {name?name:isim}</VideoLine>
  )
}

export default Home;
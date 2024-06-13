/* eslint-disable no-unused-vars */
import React from 'react'
import VideoLine from '../components/main/videoline/videoLine'

function home(props) {
  const {activeP}=props;
  const {name}=activeP;
  return (
    <VideoLine>Home {name}</VideoLine>
  )
}

export default home
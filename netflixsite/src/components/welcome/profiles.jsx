/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { Profile } from './profile'
import { imgProfiles } from '../../assets/imgData';
import { Kiddo } from './kiddo';
import { useHistory } from 'react-router-dom';



export const Profiles = (props) => {
 
  const {setActiveP,yemek}= props;
  const [profiles]=useState(imgProfiles);
  const history=useHistory();
  const [kiddo,setKiddo]=useState({
    name: 'Kiddo',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
  });

  function handleClick(profile){
    if(profile){
      setActiveP(profile);
      
      history.push("/browse");
    }else {
      setActiveP(kiddo)
      history.push("/kids");
    }
  }   
  return (
    <div className='profiles-class'>
    {profiles.map(profile=>(
      <Profile key={profile.id} profile={profile}/* setActiveP={setActiveP}*/ 
      setElma={yemek}onClick={()=>handleClick(profile)} /> ))}
   <Kiddo onClick={()=>handleClick()}/>
   </div>
  )
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { Profile } from './profile'
import { imgProfiles } from '../../imgProfiles';


export const Profiles = (props) => {
  const {setActiveP,yemek}= props;

const [profiles]=useState(imgProfiles);

  

  return (
    <div className='profiles-class'>
    {profiles.map(profile=>(<Profile key={profile.id} 
     profile={profile} setActiveP={setActiveP} setElma={yemek}/> ))}
   
   </div>
  )
}

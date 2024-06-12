/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { Profile } from './profile'
import { imgProfiles } from '../../imgProfiles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export const Profiles = () => {
const history=useHistory();
  function handleClick(p){
    const chosen=profiles.filter((profile)=>profile.name===p.name)
    setProfiles(chosen);
    history.push("/home");

    }

const [profiles,setProfiles]=useState(imgProfiles);


  return (
    <div className='profiles-class'>
    {profiles.map(profile=>(<Profile key={profile.name} 
    onClick={()=>handleClick(profile)} profile={profile}/> ))}
   
   </div>
  )
}

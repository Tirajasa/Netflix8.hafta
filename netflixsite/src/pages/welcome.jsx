/* eslint-disable no-unused-vars */
import React from 'react'
import { Profiles } from '../components/welcome/profiles'
import {Button} from 'reactstrap'

function welcome(props) {
  const {setActiveProfile,meyve}=props;
  
  return (
    <div>
      <h1>Who`s watching?</h1>
      <Profiles setActiveP = { setActiveProfile } yemek={meyve}/>
      <Button>Manage Profiles</Button>
    </div>
  )
}

export default welcome
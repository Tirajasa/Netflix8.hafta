/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const Card=styled.div`
display:flex;
flex-direction:column;
margin:0;
padding:0;
cursor:pointer;
`
const Avatar=styled.img`
width:100%;
border-radius:0.3rem;
border:1px solid gray;
&:hover{
border:1px solid red;}
`;

const User=styled.h2`
color:gray;
text-decoration:none;
text-align:center;
`;

export const Profile = (props) => {
  const {profile,setActiveP,setElma}=props;
  const {avatar,name}=profile;
  const history=useHistory();

  function handleClick(profile){
      setActiveP(profile);
      
      history.push("/home");
    }
function handleElmayiSec(profile){
       setElma(profile);
       
}

  return (
  <>
    <Card onClick={handleClick}>
      <Avatar src={avatar} alt={name}/>
      <User>{name}</User>
  </Card>
  
</>
  )
}

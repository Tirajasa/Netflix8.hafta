/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
 

const Card=styled.div`
display:flex;
flex-direction:column;
margin:0;
padding:0;
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
  const {profile,onClick}=props;
  const {avatar,name}=profile;



  return (
  <>
    <Card onClick={onClick}>
      <Avatar src={avatar} alt={name}/>
      <User>{name}</User>
  </Card>
  
</>
  )
}

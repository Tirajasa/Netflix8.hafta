/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components';


const KiddoCont=styled.div`
display: flex;
flex-direction: column;
margin:0;
padding:0;
cursor:pointer;
`;
const Kid=styled.img`
width:100%;
border-radius:0.3rem;
border:1px solid gray;
&:hover{
border:1px solid red;}
`;

const Kids=styled.h2`
color:gray;
text-decoration:none;
text-align:center;
`;
export const Kiddo = (props) => {
const {onClick}=props
  return (
    <KiddoCont onClick={()=>onClick()}>
        <Kid src="https://reqres.in/img/faces/11-image.jpg" alt="kid" />
        <Kids>Kids</Kids>
    </KiddoCont>
  )
}

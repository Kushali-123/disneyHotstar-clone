import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
       <Wrap>
         <img src ={process.env.PUBLIC_URL+"/images/Viewers-disney.png"} />
         <video muted = {true} autoPlay = {true} loop = {true} playsInline = {true}>
          <source src = {  process.env.PUBLIC_URL + "/videos/1564674844-disney.mp4" }  type= 'video/mp4' />
         </video>
       </Wrap>
       <Wrap>
         <img src ={process.env.PUBLIC_URL+"/images/Viewers-pixar.png"} />
         <video muted = {true} autoPlay = {true} loop = {true} playsInline = {true}>
          <source src = {  process.env.PUBLIC_URL + "/videos/1564676714-pixar.mp4" }  type= 'video/mp4' />
         </video>
       </Wrap>
       <Wrap>
         <img src ={process.env.PUBLIC_URL+"/images/Viewers-marvel.png"} />
         <video muted = {true} autoPlay = {true} loop = {true} playsInline = {true}>
          <source src = {  process.env.PUBLIC_URL + "/videos/1564676115-marvel.mp4" }  type= 'video/mp4' />
         </video>
       </Wrap>
       <Wrap>
         <img src ={process.env.PUBLIC_URL+"/images/Viewers-starwars.png"} />
         <video muted = {true} autoPlay = {true} loop = {true} playsInline = {true}>
          <source src = {  process.env.PUBLIC_URL + "/videos/1608229455-star-wars.mp4" }  type= 'video/mp4' />
         </video>
       </Wrap>
       <Wrap>
         <img src ={process.env.PUBLIC_URL+"/images/Viewers-national.png"} />
         <video muted = {true} autoPlay = {true} loop = {true} playsInline = {true}>
          <source src = {  process.env.PUBLIC_URL + "/videos/1564676296-national-geographic.mp4" }  type= 'video/mp4' />
         </video>
       </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
 margin-top: 30px;
 display: grid;
 padding: 30px 0px 26px;
 grid-gap: 25px;
 grid-template-columns: repeat(5, minmax(0,1fr));

`;

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
rgb(0 0 0/ 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
position: relative;

img{
    width: 100%;
    height:100%;
    object-fit: cover;
    
}

&:hover {
    box-shadow: rgb(0 0 0/80%) 0px 40px 58px -16px,
    rgb(0 0 0/72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
}


video{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left:0px;
  z-index: -1;

} `;
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import movieData from '../MovieData.json'

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState("");
  const [showTrailer, setTrailer] = useState(false);
  const clickTrailer = () => setTrailer(!showTrailer);
  // const movie = movieData.movies[id]

  // if (!movie) navigate("/");

  useEffect(()=>{
    const mov = movieData.movies[id];
    if (mov) {
      setMovie(mov);
    } else {
      navigate("/")
    }
 }, [id])

 const Trailer = (url) =>{
  return <iframe width="560" height="315" src={`${url}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; mute;" allowFullScreen></iframe>
 }

  return (
    <Container>
      {movie && (
        <>
      <Background>
        <img src= {movie.backgroundImg} />
        </Background>
        <ImageTitle>
            <img src = {movie.titleImg} />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src = {process.env.PUBLIC_URL+"/images/play-icon-black.png"} />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton onClick={clickTrailer}>
             <img src = {process.env.PUBLIC_URL+"/images/play-icon-white.png"}/>
             <span>Trailer</span>
          </TrailerButton>

          <AddButton>
          <span>+</span>
          </AddButton>
          <GroupWatchButton>
             <img src ={process.env.PUBLIC_URL+"/images/group-icon.png"}/>
          </GroupWatchButton>
        </Controls>
        <SubTitle>
          {movie.subTitle}
      </SubTitle>
      <Description>
       {movie.description}
      </Description>
      {showTrailer && Trailer(movie.trailerLink)}
      </>
      )}
    </Container>
 )
}

export default Detail

const Container = styled.div`
 min-height: calc(100vh- 70px);
 padding: 0 calc(3.5vw + 5px);
 position : relative;

`;

const Background = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 z-index: -1;
 opacity: 0.8;
 

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`;

const ImageTitle = styled.div`
height: 30vh;
min-height: 170px;
width : 35vw;
min-width:200px;
margin-top: 60px;


img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
 

`;

const Controls = styled.div`
   display: flex;
   align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background : rgb (249, 249, 249);
  border: none;
  leteer-spacing: 1.8px;
  cursor: pointer;

   &:hover {
    background: rgb(198, 198, 198);
   }

`;

const TrailerButton = styled(PlayButton)`
    background: rgba( 0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
     color: rgb(249, 249, 249);
     text-transform: uppercase;

`;

const AddButton = styled.button`
 margin-right: 16px;
  width: 44px;
  height: 44px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span{
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0);
`;

const SubTitle =  styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;

`;

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249, 249, 249);
max-width: 760px;

`;
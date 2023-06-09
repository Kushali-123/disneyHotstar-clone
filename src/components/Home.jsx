import React, {useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'
import movieData from '../MovieData.json'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserName } from '../features/user/userSlice'


function Home() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
   useEffect(()=>{
    console.log("user name is this", userName);
    if (!userName || userName == "user") navigate("/login");
    
      dispatch(setMovies(Object.entries(movieData.movies).map(([key, value]) => ({id: key, ...value}))));
   }, [])


  return (
    <Container>
       <ImgSlider />
       <Viewers />
       <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
        min-height: calc(100vh - 70px);
        padding: 0 calc(3.5vw + 5px);
        position: relative;
        overflow-x: hidden;
        
        &:before{
          background: url("/images/home-background.png") center center / cover 
          no-repeat fixed;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

`;
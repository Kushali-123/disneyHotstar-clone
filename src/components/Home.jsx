import React, {useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'
import movieData from '../MovieData.json'


function Home() {
  const dispatch = useDispatch();

   useEffect(()=>{
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
          background: url(${window.location.origin+"/images/home-background.png"}) center center / cover 
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
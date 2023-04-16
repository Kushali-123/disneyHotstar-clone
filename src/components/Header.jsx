import React, {useEffect} from 'react'
import styled from 'styled-components'
import {auth, provider} from '../firebase'
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState
} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
     const userPhoto = useSelector(selectUserPhoto);

     useEffect(()=>{
         auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLoginDetails({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })) 
                 navigate("/") 
            }
         })
     }, [])
   
     const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user
            dispatch(setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })) 
             navigate("/")
        })
     }
         
     const signOut =() => {
        auth.signOut()
        .then(()=>{
            dispatch(setSignOutState())
            navigate("/login")
        })
     }

    return (
        <Nav>
            <Logo>
                <img src={process.env.PUBLIC_URL+"/images/logo.svg"} alt="Disney+" />
            </Logo>

            {!userName ? ( 
                <LoginContainer>

               <Login onClick={signIn}>Login</Login>
                </LoginContainer>
                 ): 
                <>

            <NavMenu>
                <a href="/home">
                    <img src={process.env.PUBLIC_URL+"/images/home-icon.svg"} alt="HOME" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src={process.env.PUBLIC_URL+"/images/search-icon.svg"} alt="HOME" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src={process.env.PUBLIC_URL+"/images/watchlist-icon.svg"} alt="HOME" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src={process.env.PUBLIC_URL+"/images/original-icon.svg"} alt="HOME" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src={process.env.PUBLIC_URL+"/images/movie-icon.svg"} alt="HOME" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src={process.env.PUBLIC_URL+"/images/series-icon.svg"} alt="HOME" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg
              onClick= {signOut}
            src="https://1fid.com/wp-content/uploads/2022/06/cute-profile-picture-1024x1024.jpg" />
            </>
}
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
     height: 70px;
     background:#090b13;
     display : flex;
      align-items: center;
      padding: 0 36px;
      overflow-x: hidden;


`
const Logo = styled.a`
width: 80px;
`;

const NavMenu = styled.div`
 display: flex;
 flex: 1;
margin-left: 25px;
align-items: center;
 a{
       display:flex;
       align-items: center;
       padding: 0 12px;
       cursor: pointer;

       img{
        height: 20px; 
       }

       span{
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left:0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);

        }
    }

     &:hover {
        span: after{
            transform: scaleX(1);
            opacity: 1;
        }
     }
 }

`;

const UserImg = styled.img`
  width: 40px;
  height: 48px;
   border-radius: 50%;
   cursor: pointer;
`;

const Login = styled.a`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s ease 0s;
cursor: pointer;

&:hover{
    background-color: #f9f9f9;
    color: #000;
     border-color: transparent;
     cursor: pointer;
}


`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

`;
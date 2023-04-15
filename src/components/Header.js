import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>

            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="HOME" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="HOME" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="HOME" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="HOME" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="HOME" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://1fid.com/wp-content/uploads/2022/06/cute-profile-picture-1024x1024.jpg" />
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
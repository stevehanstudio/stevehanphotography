import React, {useContext} from 'react'
import styled from "styled-components"
import { GatsbyContext } from "../context/context"

const HamburgerIcon = () => {
  const { 
    isMobileMenuOpen, 
    showMobileMenu, 
    hideMobileMenu 
  } = useContext(GatsbyContext)

  //console.log("HamburgerIcon isMobileMenuOpen", isMobileMenuOpen)
  return (
    <MenuButton
      role="button"
      onClick={isMobileMenuOpen ? hideMobileMenu : showMobileMenu}
      isMobileMenuOpen={isMobileMenuOpen}
    >
      <div className="menu-bar"></div>
    </MenuButton>
  )
}

export default HamburgerIcon

// using div instead of button, because positioning of before & after menu-bar
// is not possible with button, but setting role to button
const MenuButton = styled.div`{
  display: none;
  visibility: hidden;
  
  @media (max-width: 842px) {
    visibility: visible;
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 72px;
    border-radius: 25px 0 0 0;
    cursor: pointer;
    /*  transition: 0s;*/
    transition: all 0.1s ease-in-out;
    background: ${props =>
      props.isMobileMenuOpen ? "rgba(0,0,0,0.6)" : "transparent"};
/*    &:hover {
      background: rgba(0, 0, 0, 0.6);
    }*/

    .menu-bar {
      width: 34px;
      background: ${props => (props.isMobileMenuOpen ? "transparent" : "#CCC")};
      height: 4px;
      border-radius: 2px;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
      transition: all 0.5s ease-in-out;
/*      &:hover {
        background: ${props =>
          props.isMobileMenuOpen ? "transparent" : "white"};
      }*/
    }
    .menu-bar::before,
    .menu-bar::after {
      content: '';
      position: absolute;
      width: 34px;
      height: 4px;
      background: #CCC;
      border-radius: 2px;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
      transition: all 0.5s ease-in-out;
      &:hover {
        background: white;
      }
    }
    .menu-bar::before {
      transform: ${props =>
        props.isMobileMenuOpen
          ? "rotate(45deg) translateY(0px)"
          : "translateY(-13px)"};
    }
    .menu-bar::after {
      transform: ${props =>
        props.isMobileMenuOpen
          ? "rotate(-45deg) translateY(0px)"
          : "translateY(13px)"};
      }
    }
  }
`
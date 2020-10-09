import React, { useState, useContext } from "react"
import styled from "styled-components"
import ReactTooltip from "react-tooltip"
import logo from "../../static/SteveHanPhotography_logo.png"
//import new_logo from "../../static/stevehanphotography_white_logo.svg"
import { Link } from "gatsby"
import _ from "lodash"
import { navLinks, socialLinks } from "../constants/links"
import {GatsbyContext} from '../context/context'
import HamburgerIcon from "./HamburgerIcon"

const activeStyles = {
  color: 'white',
  opacity: 1,
  textShadow: '0px 0px 8px 16px rgba(0,0,0,1)',
}

const Navbar = ({location}) => {
  const {
    subMenuLinks
  } = useContext(GatsbyContext)

  const [showSubMenu, setShowSubMenu] = useState(false)

  return (
    <Wrapper showSubMenu={showSubMenu} location={location}>
      <ReactTooltip />
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              className="nav-header-show"
              src={logo}
              alt="Steve Han Photography logo"
            ></img>
          </Link>
          <HamburgerIcon className="hideHamburgerIcon" />
        </div>
        <div className="menu-links">
          <ul className="nav-links">
            {navLinks.map((navLink, index) => {
              const { url, label } = navLink
              return (
                <li key={index}>
                  <Link
                    id={label === "portfolios" ? "portfolio-links" : null}
                    className="button"
                    to={url}
                    onMouseEnter={
                      label === "portfolios"
                        ? (e) => {
                            e.preventDefault()
                            setShowSubMenu(true)
                          }
                        : null
                    }
                    activeStyle={activeStyles}
                  >
                    {label}
                  </Link>
                  {label === "portfolios" ? (
                    <div
                      className="sub-menu"
                      onMouseLeave={(e) => {
                        e.preventDefault()
                        setShowSubMenu(false)
                      }}
                      tabIndex={0} 
                      role="menu"
                    >
                      <div className="caret" />
                      {subMenuLinks.map((link, index) => (
                        <Link
                          key={index}
                          role="menuitem"
                          aria-haspopup="true"
                          tabIndex={-1} 
                          className="button"
                          to={`/portfolios${link.slug}`}
                        >
                          {_.startCase(link.title)}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>
          <ul className="social-links">
            {socialLinks.map((socialLink, index) => {
              const { url, Icon, label, iconColor } = socialLink
              //console.log(label, Icon, url)
              return (
                <li key={index}>
                  <a
                    className="button"
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                    data-tip={label}
                    data-place="bottom"
                    data-effect="solid"
                    data-text-color="rgba(255,255,255,0.65)"
                    data-border={true}
                    data-border-color="rgba(255,255,255,0.3)"
                  >
                    <Icon />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  background: ${({ location }) => (location === "/" ? "transparent" : "black")};
  z-index: 10;
  height: 5rem;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  .nav-center { 
    width: 90vw;
    padding: 0;
    margin: 0 auto;
    max-width: 1000px;
    /*height: 100%;*/
  }
  .nav-header {
    height: 100%;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: auto;
      height: 60px;
      transform: translateY(-5px);
    }
    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: white;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s linear;
      &:hover {
        background: hsl(21, 81%, 29%);
      }
    }
  }
  .nav-links,
  .social-links {
    display: none;
    height: 100%;
  }
  .sub-menu {
    z-index: 99;
    position: absolute;
    top: 3.8rem;
    left: 50%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 0.2rem;
    padding: 2rem 3rem;
    transform: translateX(-50%);
    background: ${({ location }) =>
      location === "/" ? "rgba(0, 0, 0, 0.5)" : "black"};
    height: auto;
//    height: ${props => (props.showSubMenu ? "0" : "400px")};
//    width: max-content;
    width: auto;
    white-space: nowrap;
    border-radius: 5px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease-in-out;
    opacity: ${props => (props.showSubMenu ? "1" : "0")};
    visibility: ${props => (props.showSubMenu ? "visible" : "hidden")};
  }
  .caret {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid rgba(255, 255, 255, 0.3);
    top: -10px;
    left: 50%;
    transform: translateX: (-50%);
    transition: all 0.3s ease-in-out;
    opacity: ${props => (props.showSubMenu ? "1" : "0")};
    visibility: ${props => (props.showSubMenu ? "visible" : "hidden")};;
    z-index: 9;
  }
  .portfolio-links {
    &:hover {
      background: yellow;
    }
  }
  @media (min-width: 842px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .menu-links {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      max-width: 1000px;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      max-width: 500px;
      /*      border-right: 1px solid rgba(255, 255, 255, 0.3);*/
      margin: 5px;
      padding: 5px;
      li {
        height: 100%;
        padding: 18px 0;
        position: relative;
      }
    }
    .social-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 30px;
      li {
        padding: 5px;
        margin-left: 15px;
        margin-top: auto;
        margin-right: auto;
        margin-bottom: auto;
        height: 30px;
        width: 30px;
        a {
          padding-left: 0px;
          padding-right: 0px;
          padding-top: 0px;
          padding-bottom: 0px;
          margin-top: 0px;
          margin-bottom: 0px;
          margin-left: 2px;
          margin-right: 0px;
        }
        &:hover {
          background: #3b5998;
          color: white;
          border-radius: 15px;
        }
      }
    }
    button,
    .button {
      color: rgba(255, 255, 255, 0.5);
      //      color: rgba(200,200,200,0.7);
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
      background: transparent;
      border: transparent;
      font-size: 1rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 10px 20px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
      &:hover {
        color: white;
      }
    }
  }

  .mobile-menu-close-icon {
    color: rgba(255, 255, 255, 0.6);
    /*    color: #88add2;*/
    background: transparent;
    font-size: 2rem;
    &:hover {
      color: white;
    }
  }
`

export default Navbar

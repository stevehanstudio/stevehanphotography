import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {GatsbyContext} from "../context/context"

const MobileMenu = ({location}) => {
  const {navLinks, socialLinks, isMobileMenuOpen, hideMobileMenu} = useContext(GatsbyContext)
  //console.log("location", location)
  //console.log("isMobileMenuOpen", isMobileMenuOpen)
  return (
    <Wrapper location={location} isMobileMenuOpen={isMobileMenuOpen}>
      <div className="container">
        <div className="links">
          {navLinks.map((navLink, index) => {
            const { url, label, Icon } = navLink
            //console.log("Mobile Nav Menu", label, Icon, url)
            return (
              <Link className="button" to={url} key={index} onClick={hideMobileMenu}>
                <Icon className="icons"/>
                <div className="labels">{label}</div>
              </Link>
            )
          })}
          {socialLinks.map((socialLink, index) => {
            const { url, label, Icon } = socialLink
            return (
              <div key={index}>
                <a
                  className="button"
                  href={url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="icons" />
                  <div className="labels">{label}</div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.aside`
  display: none;
  visibility: hidden;

  @media (max-width: 842px) {  
    /*  position: fixed;*/
    top: ${props => (props.location === "/" ? "72px" : "0")};
    /*top: 0;
    left: 0;*/
    position: ${props => (props.location === "/" ? "fixed" : "relative")};
    width: 100%;
    /*  height: ${p => (p.isMobileMenuOpen ? "auto" : "0")};*/
    opacity: ${p => (p.isMobileMenuOpen ? 0.6 : 0)};
    visibility: ${p => (p.isMobileMenuOpen ? "visible" : "hidden")};
    max-height: ${p => (p.isMobileMenuOpen ? "500px" : "0")};
    transition-duration: 0.5s;
    transition-delay: 0.2s;
    /*  height: 100%;*/
    background: black;
    /*  background: rgba(0, 0, 0, 0.4);*/
    z-index: 1;
    display: flex;
    overflow: hidden;
    /*  align-items: flex-end;*/
    justify-content: left;
    a {
      color: #ccc;
      &: hover {
        color: white;
      }
    }
    .container {
      /*    background: rgba(0, 0, 0, 0.7);*/
      position: relative;
      /*margin: 2rem 2rem 2rem 2rem;*/
      padding: 0;
      margin: 0;
      .links {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .button {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0.3rem 1.4rem;
        width: 100vw;
        background: transparent;
        &:first-of-type {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        font-size: 1.4rem;
        line-height: 3rem;
        cursor: pointer;
        &:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        .icons {
          margin-right: 1rem;
          font-size: 1.6rem;
          margin-top: 0.6rem;
          width: 3.1rem;
        }
        .labels {
          margin-left: 0.1rem;
        }
      }
    }
  }
`
export default MobileMenu

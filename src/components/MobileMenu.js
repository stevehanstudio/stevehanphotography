import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {GatsbyContext} from "../context/context"

const MobileMenu = () => {
  const {navLinks, socialLinks, hideMobileMenu} = useContext(GatsbyContext)

  return (
    <Wrapper>
      <div className="container">
        <div className="links">
          {navLinks.map((navLink, index) => {
            const { url, label, Icon } = navLink
            console.log("Mobile Nav Menu", label, Icon, url)
            return (
              <Link to={url} key={index} onClick={hideMobileMenu}>
                <Icon />{label}
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
                  <Icon />{label}
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
  position: fixed;
  top: 5rem;
  /*  top: 0;*/
  left: 0;
  width: 100%;
  height: 24rem;
  /*  height: 100%;*/
  background: black;
  /*  background: rgba(0, 0, 0, 0.4);*/
  z-index: 999;
  display: flex;
/*  align-items: flex-end;*/
/*  align-items: center;*/
  justify-content: left;
  @media (min-width: 800px) {
    display: none;
  }
  .container {
/*    background: rgba(0, 0, 0, 0.7);*/
    /*    width: 80vw;
    height: 80vh;*/
    position: relative;
    padding: 2rem 2rem 2rem 2rem;
    button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
      color: var(--clr-white);
      //      color: var(--clr-grey-5);
    }
    .links {
      display: grid;
      gap: 1rem 2rem;
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      a {
        display: grid;
        grid-template-columns: 1fr auto;
        /*        grid-template-columns: auto 1fr;*/
        gap: 0.75rem;
        grid-gap: 0.75rem;
        align-items: center;
        color: rgba(255, 255, 255, 0.6);
        //color: #0a2540;
        text-transform: capitalize;
        font-weight: 500;
        //font-weight: 700;
        font-size: 1.2rem;
        .icon {
          color: #88add2;
          font-size: 2rem;
        }
        &:hover {
          color: rgba(255, 255, 255, 1);
          //cursor: pointer;
          //          color: #88add2;
          .icon {
            color: #0a2540;
          }
        }
      }
    }
  }
`
export default MobileMenu

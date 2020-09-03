import React, { useContext } from "react"
import styled from "styled-components"
import logo from "../images/SteveHanPhotography_logo.png"
import { GoThreeBars } from "react-icons/go"
import { Link } from "gatsby"
//import NavLink from "./NavLink"
import {GatsbyContext} from '../context/context'

const Navbar = ({location}) => {
  const { isSidebarOpen, showSidebar, links } = useContext(GatsbyContext)

  return <Wrapper location={location}>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="Steve Han Photography logo"></img>
        </Link>
        {!isSidebarOpen &&
          <button className="toggle-btn" onClick={showSidebar}>
            <GoThreeBars />
          </button>
        }
      </div>
      <ul className="nav-links">
        {links.map((link, index) => {
          const {url, label} = link
          if (index !== 0) {
            return (
              <li key={index}>
                <Link className="button" to={url}>{label}</Link>
              </li>
            )
          }
          return null
        })}
      </ul>  
    </div>
  </Wrapper>
}

const Wrapper = styled.nav`
  position: relative;
  background: ${({ location }) => (location === '/' ? 'transparent' : 'var(--clr-black)')};
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: rgba(0,0,0,0.5);
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
      color: var(--clr-white);
      background: transparent;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 800px) {
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
    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 500px;
    }
    li {
      padding: 1rem 0;
      position: relative;
    }
    button, .button {
      color: rgba(255,255,255,0.7);
      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
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
        color: var(--clr-white);
      }
    }    
}
`

export default Navbar

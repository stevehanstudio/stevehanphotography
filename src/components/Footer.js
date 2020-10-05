import React from "react"
import styled from "styled-components"
const Footer = ({ location }) => {
  return (
    <Wrapper location={location}>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://www.stevehan.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steve Han
        </a>
        . All rights reserved.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  z-index: 2;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3.6rem;
  display: grid;
  place-items: center;
  background: ${({ location }) => (location === "/" ? "transparent" : "black")};
  //background: transparent;
  //opacity: 0.8;
  text-align: center;
  padding: 1rem;
  @media (max-width: 576px) {
    height: 3.4rem;
    bottom: 0;
//    bottom: ${({ location }) => (location === "/" ? "3.4rem" : "0")};
  }
  p {
    color: rgba(255, 255, 255, 0.6);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
    letter-spacing: 0.1rem;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
  a {
    color: rgba(203, 230, 255, 0.95);
    text-shadow: px 1px 2px rgba(0, 0, 0, 0.15);
    &:hover {
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
  }
`
export default Footer

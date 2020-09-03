import React from "react"
import styled from "styled-components"
const Footer = ({ location }) => {
  return (
    <Wrapper location={location}>
      <p>
        &copy; {new Date().getFullYear()} Steve Han. All rights reserved.
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4.6rem;
  display: grid;
  place-items: center;
  background: ${({ location }) =>
    location === "/" ? "transparent" : "var(--clr-black)"};
  //background: transparent;
  //opacity: 0.8;
  //  background: var(--clr-black);
  text-align: center;
  padding: 1rem;
  @media (max-width: 576px) {
    height: 3.6rem;
  }
  p {
    //color: var(--clr-white);
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
`
export default Footer

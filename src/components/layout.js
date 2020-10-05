import React from "react"
import style from 'styled-components'
import Navbar from "./Navbar"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"

const Wrapper = style.div`
  height: ${({ location }) => (location === "/" ? "100%" : "auto")};
  max-height: ${({ location }) => (location === "/" ? "100vh" : "auto")};
  overflow-y: ${({ location }) => (location === "/" ? "hidden" : "visible")};
  .container {
    // Add a margin for the footer
    margin-bottom: ${({ location }) => (location === "/" ? "0" : "4.6rem")};
    @media (max-width: 576px) {
      margin-bottom: ${({ location }) => (location === "/" ? "0" : "3.4rem")};
    }
  }
`

const Layout = ({ location, children }) => {
  //console.log("location", location)
  return (
    <Wrapper location={location}>
      <Navbar location={location} />
      <MobileMenu location={location} />
      <section className="container">{children}</section>
      <Footer location={location} />
    </Wrapper>
  )
}

export default Layout

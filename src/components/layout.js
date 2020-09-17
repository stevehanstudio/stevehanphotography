import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"

const Layout = ({ location, children }) => {
  return (
    <>
      <Navbar location={location} />
      <MobileMenu location={location} />
      {children}
      <Footer location={location} />
    </>
  )
}

export default Layout

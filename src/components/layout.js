import React, { useContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"
import { GatsbyContext } from '../context/context'

const Layout = ({ location, children }) => {
  const { isMobileMenuOpen } = useContext(GatsbyContext)
  return (
    <>
      <Navbar location={location} />
      {isMobileMenuOpen && <MobileMenu />}
      {children}
      <Footer location={location} />
    </>
  )
}

export default Layout

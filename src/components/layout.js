import React, { useContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { GatsbyContext } from '../context/context'

const Layout = ({ location, children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)
  return (
    <>
      <Navbar location={location} />
      {isSidebarOpen && <Sidebar /> }
      {children}
      <Footer location={location} />
    </>
  )
}

export default Layout

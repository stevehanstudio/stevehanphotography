import React, { useState, createContext } from "react"
import links from "../constants/links"

const GatsbyContext = createContext()

const GatsbyProvider = ({ children }) => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false)

   const showSidebar = () => {
      console.log("showSidebar");
      setIsSidebarOpen(true)
   }

   const hideSidebar = () => {
      setIsSidebarOpen(false)
   }

   return (
      <GatsbyContext.Provider
         value={{ isSidebarOpen, links, showSidebar, hideSidebar }}
      >
         {children}
      </GatsbyContext.Provider>
   )
}

export { GatsbyContext, GatsbyProvider }
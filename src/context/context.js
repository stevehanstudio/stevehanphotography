import React, { useState, createContext } from "react"
import { navLinks, socialLinks } from "../constants/links"


const defaultState = {
  isMobileMenuOpen: false,
  navLinks: [],
  socialLinks: [],
  showMobileMenu: () => {},
  hideMobileMenu: () => {},
}
/*
  togglePlayer: () => {},
  currentlyPlayingSoundCloudTrack: "",
  isPlaying: false,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
  drawerOpen: false,
}

const PlayerContext = React.createContext(defaultState)
*/
// without defaultState it runs locally in develop but not on build
const GatsbyContext = createContext(defaultState)

const GatsbyProvider = ({ children }) => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

   const showMobileMenu = () => {
//     console.log("showMobileMenu")
     setIsMobileMenuOpen(true)
   }

   const hideMobileMenu = () => {
     setIsMobileMenuOpen(false)
   }

   return (
     <GatsbyContext.Provider
       value={{
         isMobileMenuOpen,
         navLinks,
         socialLinks,
         showMobileMenu,
         hideMobileMenu,
       }}
     >
       {children}
     </GatsbyContext.Provider>
   )
}

export { GatsbyContext, GatsbyProvider }
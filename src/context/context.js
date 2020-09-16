import React, { useState, createContext } from "react"
import { navLinks, socialLinks } from "../constants/links"

const GatsbyContext = createContext()

const GatsbyProvider = ({ children }) => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

   const showMobileMenu = () => {
     console.log("showMobileMenu")
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
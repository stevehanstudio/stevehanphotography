// To do: navLinks and socialLinks are constants.  Remove from context.

import React, { useState, createContext } from "react"
import {graphql, useStaticQuery} from "gatsby"
import { navLinks, socialLinks } from "../constants/links"

const defaultState = {
  isMobileMenuOpen: false,
  navLinks: [],
  socialLinks: [],
  subMenuLinks: [],
  showMobileMenu: () => {},
  hideMobileMenu: () => {},
}

// without defaultState it runs locally in develop but not on build
const GatsbyContext = createContext(defaultState)

const GatsbyProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allPortfoliosYaml {
        nodes {
          slug
          title
        }
      }
    }
  `)

  const subMenuLinks = data.allPortfoliosYaml.nodes

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const showMobileMenu = () => {
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
        subMenuLinks,
        showMobileMenu,
        hideMobileMenu,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
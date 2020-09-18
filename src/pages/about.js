import React from "react"
//import { graphql } from "gatsby"
import { Layout, About } from "../components"
import SEO from "../components/seo"

const HomePage = () => {
   return (
     <Layout>
       <SEO title="About Me" />
       <About />
     </Layout>
   )
}

export default HomePage

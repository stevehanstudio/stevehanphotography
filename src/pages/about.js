import React from "react"
import { Layout, SEO, About } from "../components"

const HomePage = () => {
   return (
     <Layout>
       <SEO title="About Me" />
       <About />
     </Layout>
   )
}

export default HomePage

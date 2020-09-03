import React from "react"
import { graphql } from "gatsby"
import { Layout, Hero } from "../components"
//import SEO from "../components/seo"

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: portfolios }
  } = data
  return (
    <Layout location="/">
      <Hero portfolios={portfolios} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: {
        table: {eq: "Portfolios"}} 
    ) {
      nodes {
        id
        data {
          name
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage

import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, Hero } from "../components"

const HomePage = ({ data }) => {
  const {
    allFile: { nodes: portfolios },
  } = data

  //console.log("index:", data)
  //console.log(portfolios)

  return (
    <Layout location="/">
      <SEO title="Home" />
      <Hero portfolios={portfolios} />
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: { name: { regex: "/bcg-/" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  }
`

export default HomePage

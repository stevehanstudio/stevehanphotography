import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, Hero } from "../components"

const HomePage = ({ data }) => {
  const {
    allCloudinaryAsset: {nodes: portfolios }
  } = data

  return (
    <Layout location="/">
      <SEO title="Home" />
      <Hero portfolios={portfolios} />
    </Layout>
  )
}

export const query = graphql`
  {
    allCloudinaryAsset(filter: {fluid: {src: {regex: "/bcg-/"}}}) {
      nodes {
        fluid {
            ...CloudinaryAssetFluid
        }
      }
    }
  }
`

export default HomePage

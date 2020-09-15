import React from "react"
import { graphql } from "gatsby"
import { Layout, Hero } from "../components"
import SEO from "../components/seo"

const HomePage = ({ data }) => {
  const {
    allCloudinaryAsset: {nodes: portfolios }
  } = data

  return (
    <Layout location="/">
      <SEO title="Home | Steve Han Photography" />
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

/*
export const query = graphql`
  {
    allCloudinaryAsset {
      nodes {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  }
`*/
//  ...CloudinaryAssetFluid

export default HomePage

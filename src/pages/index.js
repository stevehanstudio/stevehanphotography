import React from "react"
import { graphql } from "gatsby"
import { Layout, Hero } from "../components"
//import SEO from "../components/seo"

const HomePage = ({ data }) => {
  console.log("data", data)
  const {
    allCloudinaryAsset: { edges: portfolios }
  } = data

  console.log(portfolios)
/*  const {
    allCloudinaryMedia: {nodes: portfolios }
  } = data*/

  return (
    <Layout location="/">
      <Hero portfolios={portfolios} />
    </Layout>
  )
}

export const query = graphql`
  {
    allCloudinaryAsset {
      edges {
        node {
          fluid {
            ...CloudinaryAssetFluid
          }
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

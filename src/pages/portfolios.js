import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout, Portfolios } from "../components"
//import SEO from "../components/seo"

const HomePage = ({ data }) => {
/*  const {
    allCloudinaryAsset: { nodes: portfolios },
  } = data*/

  const {
    allCloudinaryAsset: { edges: portfolios },
  } = data

/*  const {
    allCloudinaryMedia: { nodes: portfolios },
  } = data
*/
   return (
      <Layout>
         <Portfolios portfolios={portfolios} />
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


export default HomePage

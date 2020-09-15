import React from "react"
import { graphql } from "gatsby"
import Gallery from "../components/gallery"

const GalleryPage = ({ data, pageContext }) => {
  const { name, slug, caption } = pageContext
  const photos = data.images.nodes
  photos.map(photo => {
    data.portfoliosYaml.photos.map(yamlPhoto => {
      if (photo.name === yamlPhoto.name) {
          photo.caption = yamlPhoto.caption
          return
      }
      return
    })
  })   
  
  return (
      <Gallery name={name} photos={photos} />
  )
}

export default GalleryPage

export const query = graphql`
  query($name: String) {
    images: allFile(filter: { sourceInstanceName: {eq: $name} }) {
      nodes {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
            ...CloudinaryAssetFluidLimitPresentationSize
          }
        }
        name
      }
    }
    portfoliosYaml(title: { eq: $name }) {
      photos {
        caption
        name
      }
      slug
      title
    }
  }
`


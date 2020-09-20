import React from "react"
import { graphql } from "gatsby"
import Gallery from "../components/gallery"

const GalleryPage = ({ data, pageContext }) => {
  const { name, slug, caption } = pageContext
  const description = data.portfoliosYaml.description
  const photos = data.images.nodes
  const photosWithCaption = photos.map(photo => {
    data.portfoliosYaml.photos.map(yamlPhoto => {
      if (photo.name === yamlPhoto.name) {
        photo.caption = yamlPhoto.caption
        return true
      }
      return false
    })
    return photo
  })   
  return (
      <Gallery name={name} description={description} photos={photosWithCaption} />
  )
}

export default GalleryPage
 
export const query = graphql`
  query($name: String) {
    images: allFile(
      filter: { sourceInstanceName: { eq: $name } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        cloudinary: childCloudinaryAsset {
          thumbnail_fluid: fluid {
            ...CloudinaryAssetFluid
            ...CloudinaryAssetFluidLimitPresentationSize
          }
          lightbox_fluid: fluid(
            transformations: ["w_240", "l_SteveHanLogo", "g_south", "y_3"]
          ) {
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
      description
    }
  }
`


import React from "react"
import { graphql, replace } from "gatsby"
import Gallery from "../components/gallery"

const GalleryPage = ({ data, pageContext }) => {
  const { name, slug, caption } = pageContext
  const photos = data.images.nodes
  const photosWithCaption = photos.map(photo => {
    data.portfoliosYaml.photos.map(yamlPhoto => {
      const photoNameWithoutIndex = photo.name.replace(/fashion-(\d+)-/, "fashion-")
      console.log(
        `Searching caption: photo.name=${photo.name}, photoNameWithoutIndex=${photoNameWithoutIndex}, yamlPhoto.name=${yamlPhoto.name}, yamlPhoto.caption=${yamlPhoto.caption}`
      )
      if (photoNameWithoutIndex === yamlPhoto.name) {
        photo.caption = yamlPhoto.caption
        console.log("Added caption", photo.name, photo.caption)
        return true
      }
      return false
    })
    return photo
  })   
  console.log("photosWithCaption", photosWithCaption)
  return (
      <Gallery name={name} photos={photosWithCaption} />
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
    }
  }
`


import React from "react"
import { graphql } from "gatsby"
import Gallery from "../components/gallery"

const GalleryPage = ({ data, pageContext }) => {
  const { name, slug, caption } = pageContext
  const description = data.portfoliosYaml.description
  const photos = data.images.nodes
  const photosWithCaption = photos.map(photo => {
    data.portfoliosYaml.photos.map(yamlPhoto => {
      //console.log('Looking', photo, yamlPhoto)
      if (photo.name === yamlPhoto.name) {
        photo.caption = yamlPhoto.caption
        photo.videoUrl = yamlPhoto.videoUrl 
        //console.log('Found!', photo, yamlPhoto)
        return true
      }
      return false
    })
    return photo
  })   

//  console.log("GalleryPage pageContext", pageContext)
//  console.log("GalleryPage data", data)
//  console.log("GalleryPage photos", photos)
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
        videoUrl
      }
      slug
      title
      description
    }
  }
`


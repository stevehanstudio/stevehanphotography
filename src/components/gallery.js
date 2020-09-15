import React, { useState, useCallback } from "react"
import Layout from "./layout"
import styled from "styled-components"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Box } from "theme-ui"
//import SEO from "./seo"

export default ({ name="fashion", options={margin: 5, direction: "row"}, photos }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  //console.log("Photos", photos)
  //console.log("options", options)
  
  const galleryPhotos = photos.map(photo => {
    //const width = (photo.cloudinary.fluid.aspectRatio < 1.0) ? 3 : 4
    //const height = (photo.cloudinary.fluid.aspectRatio < 1.0) ? 4 : 3
    // console.log(`width=${width}, height=${height}`)
    if (photo.cloudinary !== null && photo.cloudinary.fluid !== null) {   
      return {
        src: photo.cloudinary.fluid.src,
        width: photo.cloudinary.fluid.maxWidth,
        height: photo.cloudinary.fluid.maxHeight,
        sizes: photo.cloudinary.fluid.sizes,
        srcSet: photo.cloudinary.fluid.srcSet,
        alt: photo.caption,
        title: photo.caption,
      }
    }
    return undefined;
  }).filter(item => item !== undefined)

  //console.log("galleryPhotos!", galleryPhotos)

  return (
    <Layout>
      <Box sx={{ p: `${options.margin}px` }}>
        <Gallery
          photos={galleryPhotos}
          direction={options.direction}
          margin={options.margin}
          onClick={openLightbox}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <StyledCarousel
                currentIndex={currentImage}
                views={galleryPhotos.map(photo => ({
                  ...photo,
                  srcset: photo.srcSet,
                  caption: photo.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Box>
    </Layout>
  )
}

const StyledCarousel = styled(Carousel)`
  .react-images__view {
    width: 1000px;
    height: 1000px;
    max-height: 1000px;
    max-width: 1000px;
  }
`

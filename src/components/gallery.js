import React, { useState, useCallback } from "react"
//import {graphql, useStaticQuery} from "gatsby"
import style from "styled-components"
import Layout from "./layout"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
//import { Box } from "theme-ui"
import Title from "./Title"
import SEO from "./seo"
import _ from "lodash"

const Wrapper = style.div`
  p {
    margin: 0 auto;
    padding-bottom: 2rem; 
    max-width: 1000px;
    line-height: 1.9rem;
  }
`

export default ({ name, description, options={margin: 5, direction: "row"}, photos }) => {
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
    if (photo.cloudinary !== null && photo.cloudinary.thumbnail_fluid !== null) {   
      return {
        src: photo.cloudinary.thumbnail_fluid.src,
        width: photo.cloudinary.thumbnail_fluid.maxWidth,
        height: photo.cloudinary.thumbnail_fluid.maxHeight,
        sizes: photo.cloudinary.thumbnail_fluid.sizes,
        srcSet: photo.cloudinary.thumbnail_fluid.srcSet,
        alt: photo.caption,
        title: photo.caption,
      }
    }
    return undefined;
  }).filter(item => item !== undefined)

  const lightboxPhotos = photos.map(photo => {
    //const width = (photo.cloudinary.fluid.aspectRatio < 1.0) ? 3 : 4
    //const height = (photo.cloudinary.fluid.aspectRatio < 1.0) ? 4 : 3
    // console.log(`width=${width}, height=${height}`)
    if (photo.cloudinary !== null && photo.cloudinary.lightbox_fluid !== null) {   
      return {
        src: photo.cloudinary.lightbox_fluid.src,
        width: photo.cloudinary.lightbox_fluid.maxWidth,
        height: photo.cloudinary.lightbox_fluid.maxHeight,
        sizes: photo.cloudinary.lightbox_fluid.sizes,
        srcSet: photo.cloudinary.lightbox_fluid.srcSet,
        alt: photo.caption,
        title: photo.caption,
      }
    }
    return undefined;
  }).filter(item => item !== undefined)

  //console.log("galleryPhotos!", galleryPhotos)
  //console.log("lightboxPhotos!", lightboxPhotos)

  return (
    <Layout>
      <SEO title={`${_.capitalize(name)} Portfolio`} />
      <Title title={name} />
      <Wrapper>
{/*      <Box sx={{ p: `${options.margin}px` }}>*/}
        <p>{description}</p>
        <Gallery
          photos={galleryPhotos}
          direction={options.direction}
          margin={options.margin}
          onClick={openLightbox}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={lightboxPhotos.map(photo => ({
                  ...photo,
                  srcset: photo.srcSet,
                  caption: photo.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Wrapper>
    </Layout>
  )
}


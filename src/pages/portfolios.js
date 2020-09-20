import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Query for the 1st photo in each portfolio
const Portfolios = () => {
  const data = useStaticQuery(graphql`
    query {
      travel: cloudinaryAsset(fluid: { src: { regex: "/travel-1/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      music: cloudinaryAsset(fluid: { src: { regex: "/music-1/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      fashion: cloudinaryAsset(fluid: { src: { regex: "/fashion-1/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      lifestyle: cloudinaryAsset(fluid: { src: { regex: "/lifestyle-1/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      portrait: cloudinaryAsset(fluid: { src: { regex: "/portrait-1/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      techevents: cloudinaryAsset(fluid: { src: { regex: "/techevents-1/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      restaurants: cloudinaryAsset(
        fluid: { src: { regex: "/restaurants-1/" } }
      ) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  `)

  //console.log("Portfolios", data)

  return (
    <Layout>
      <SEO title="All Portfolios" />
      <StyledContainer>
        {Object.keys(data).map(photo => (
          //<div>{JSON.stringify(data[photo])}</div>
          <StyledLink key={photo} to={`${photo}/`}>
            <StyledTitle>{photo}</StyledTitle>
            <StyledImage fluid={data[photo].fluid} />
          </StyledLink>
        ))}
      </StyledContainer>
    </Layout>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  //  height: 100vh;
  @media (min-width: 530px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const StyledLink = styled(Link)`
  position: relative;
  //  width: 300px;
  //  height: 250px;
  overflow: hidden;
  float: left;
  clear: both;

  @media (min-width: 530px) {
    width: 100%;
    height: calc(100vw * 0.7);
  }

  @media (min-width: 767px) {
    width: 50%;
    height: calc(100vw * 0.4);
  }

  @media (min-width: 842px) {
    width: 33.3%;
    height: calc(100vw * 0.2);
  }
`

const StyledImage = styled(Image)`
  //  width: 100%;
  //  height: 100%;
  object-fit: cover;
  overflow: hidden;
  transition: 0.8s;
  background: black;
  opacity: 0.7;
  margin: 0;
  padding: 0;
  z-index: 0;
  &:hover {
    border: 2px solid blue;
    transform: scale(1.15);
    opacity: 1;
  }
`

const StyledTitle = styled.h3`
  position: absolute;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  //  text-align: middle;
  align-content: center;
  left: 50%;
  margin-left: -4.4rem;
  top: 50%;
  margin-top: -1.8rem;
  z-index: 1;
`

export default Portfolios

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Layout, SEO } from "../components"
import _ from "lodash"

// Query for the 1st photo in each portfolio
const Portfolios = () => {
  const data = useStaticQuery(graphql`
    query {
      travel: cloudinaryAsset(fluid: { src: { regex: "/travel-01-/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      music: cloudinaryAsset(fluid: { src: { regex: "/music-01-/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      fashion: cloudinaryAsset(fluid: { src: { regex: "/fashion-01-/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      lifestyle: cloudinaryAsset(fluid: { src: { regex: "/lifestyle-01-/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      portrait: cloudinaryAsset(fluid: { src: { regex: "/portrait-01-/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      techEvents: cloudinaryAsset(fluid: { src: { regex: "/techEvents-01-/" } }) {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
      restaurants: cloudinaryAsset(fluid: { src: { regex: "/restaurants-01-/" } }) {
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
            <StyledTitle>{_.startCase(photo)}</StyledTitle>
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

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
`

const StyledLink = styled(Link)`
  //  width: 300px;
  //  height: 250px;
  overflow: hidden;

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
  transition: 1s;
  &:hover {
    border: 2px solid blue;
    transform: scale(1.2);
  }
`

const StyledTitle = styled.h3`
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  position: absolute;  
  text-align: middle;
  align-content: center;
  z-index: 1;
`

// Query for the 1st photo in each portfolio
const Portfolios = () => {
  const data = useStaticQuery(graphql`
    query {
      fashion: cloudinaryAsset(fluid: {src: {regex: "/fashion/"}}) {
        fluid {
            ...CloudinaryAssetFluid
        }
      }
      restaurants: cloudinaryAsset(fluid: {src: {regex: "/restaurants/"}}) {
        fluid {
            ...CloudinaryAssetFluid
        }
      }
    }
  `)

  console.log("Portfolios", data)

  return (
    <Layout>
      <SEO title="Portfolios" />
      <h1>Portfolios</h1>
      <StyledContainer>
        {Object.keys(data).map(photo => (
          //<div>{JSON.stringify(data[photo])}</div>
          <StyledLink key={photo} to={`${photo}/`}>
            <StyledTitle>{photo}</StyledTitle>
            <StyledImage fluid={data[photo].fluid} />
          </StyledLink>
        ))}
      </StyledContainer>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Portfolios


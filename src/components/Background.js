import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

/*
const query = graphql`
  {
    file(relativePath: {eq: "../../static/mainBcg.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
*/
const Background = ({ children, image }) => {
/*  const {
    file: {
      childImageSharp: { 
        fluid 
      }
    }
  } = useStaticQuery(query)
*/  
  return <Wrapper>
    <BackgroundImage Tag="div" fluid={image} className="bcg" preserveStackingContext={true}>
      {children}
    </BackgroundImage>
  </Wrapper>
}

const fadeIn = keyframes`
      from{
//         background-color:rgb(255,255,255,0.2);
         background-color:rgba(0,0,0,0.8);
      }
      to{
        background-color:rgba(0,0,0,0);
      }
      `

const Wrapper = styled.section`
  .bcg {
    /* Must give it a height */
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
  }
  .bcg::before {
    opacity: 1;
  }
`
export default Background

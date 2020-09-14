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
    <HeroBackgroundImage 
      Tag="div" 
      fluid={image} 
      className="bcg" 
      preserveStackingContext={true}    
    >
      {children}
    </HeroBackgroundImage>
  </Wrapper>
}

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  opacity: 1 !important;
  background-repeat: no-repeat;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 1%,
    rgba(0, 0, 0, 0.15) 3%,
    rgba(0, 0, 0, 0.1) 4%,
    rgba(0, 0, 0, 0.05) 5%,
    rgba(0, 0, 0, 0) 7%,
    rgba(0, 0, 0, 0.05) 92%,
    rgba(0, 0, 0, 0.1) 94%,
    rgba(0, 0, 0, 0.2) 96%,
    rgba(0, 0, 0, 0.3) 98%,
    rgba(0, 0, 0, 0.35) 99%,
    rgba(0, 0, 0, 0.4)
  );
  background-size: cover;
`

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
5)
  }
  .bcg::before {
    opacity: 1;
  }
`
export default Background

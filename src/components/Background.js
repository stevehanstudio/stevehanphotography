import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"

const Background = ({ children, image }) => {
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
  background-size: cover;
`

const fadeIn = keyframes`
  from{
    background-color:rgba(0,0,0,0.8);
  }
  to{
    background-color:rgba(0,0,0,0);
  }
`

const Wrapper = styled.section`
  .bcg {
    box-shadow: inset 0px 0px 180px 60px rgb(0,0,0,0.5);
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

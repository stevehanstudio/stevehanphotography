import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Title from "./Title"
//import logo from "../../static/SteveHanPhotography_logo.png"
//import new_logo from '../../static/stevehanphotography_white_logo.svg'
//import photo from "https://res.cloudinary.com/dwwthhrah/image/upload/v1601755897/SunsetPartyNavatoPhotoByMalcolmTrachtenberg.jpg"

const About = ({data}) => {
  const {html, frontmatter: {image, imageDesc, title}} = data
//  console.log("About", image, imageDesc, title)
  return (
    <Wrapper className="section">
{/*      <img
        src={logo}
        alt="Steve Han Photography logo"
      />
      <img src={new_logo} height={50} />*/}
      <Title title={title} />
      <div className="section">
        <img
          src={image}
          alt={imageDesc}
        />
        <h6>{imageDesc}</h6>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 0;
  margin: 0 auto;
/*  img {
      width: auto;
      width: 20vw;
      height: 100px;
      transform: translateY(-5px);
  }*/
  .section {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 6rem;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 900px;
    overflow: auto;
    @media (max-width: 600px) {
      margin-left: 0;
      margin-right: 0;
      padding: 0;
      margin-top: 1.6rem;      
    }
    /* safari workaround */
    h3 {
      text-transform: uppercase;
      font-weight: 500;
    }
    p {
//      font-size: 1.2rem;
      line-height: 1.8rem;
      color: lightgrey;
      margin-top: 2rem;
      @media (max-width: 600px) {
        width: 100%;
        padding-left: 10px;
        padding-right: 20px;
        margin-top: 1.4rem;
        font-size: 1rem;
        line-height: 1.7rem;
      }
    }
    a {
      color: rgba(203, 230, 255, 0.95);
      &:hover {
        color: white;
      }
    }
    h6 {
      margin: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 10px;
      padding-bottom: 1rem;
      font-size: 1rem;
      line-height: 1.2rem;
      color: lightgrey;
      font-weight: 300;
      @media (max-width: 600px)
        width: 100%;
        padding: 0;
        margin: 8px 10px;
        font-size: 0.7rem;
        line-height: 1rem;
      }
    }
    img {
      @media (max-width: 600px)
        margin: 0;
        padding: 0;
        width: 100vw;
        max-width: 100%;
        min-width: 100%;
      }
    } 
  }
`
export default About


import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Title from "./Title"
//import logo from "../../static/SteveHanPhotography_logo.png"
//import new_logo from '../../static/stevehanphotography_white_logo.svg'
//import photo from "https://res.cloudinary.com/dwwthhrah/image/upload/v1601755897/SunsetPartyNavatoPhotoByMalcolmTrachtenberg.jpg"

const About = () => {
/*  const data = useStaticQuery(graphql`
    query aboutQuery {
      allAboutYaml {
        nodes {
          content
          photo {
            url
            caption
            description
          }
        }
      }
    }
  `)

  const { content } = data.allAboutYaml.nodes[0]
  
  const { url, caption, description } = data.allAboutYaml.nodes[0].photo[0]
  console.log(data)
  console.log(content, url)
*/
  return (
    <Wrapper className="section">
{/*      <img
        src={logo}
        alt="Steve Han Photography logo"
      />
      <img src={new_logo} height={50} />*/}
      <Title title="About" />
      <div className="section">
        <img
          src="https://res.cloudinary.com/dwwthhrah/image/upload/v1601755897/SunsetPartyNavatoPhotoByMalcolmTrachtenberg.jpg"
          alt="Steve Han photographing at Sunset Party at Stafford Lake Novato by Malcolm Trachtenberg"
        />
        <h6>
          Sunset Party at Stafford Lake, Novato. Photo by Malcolm Trachtenberg
        </h6>
        <p>
          I made my first website, stevehanphoto.com, in 2002 to document my
          journey in photography and share my experiences. I loved to travel and
          back than I was developing a passion for electronic dance music, which
          led to me managing the website, eventvibe.com.
        </p>
        <p>
          It is now 2020, and for the past 2 years I've been learning the modern
          way to develop web applications. This site is built with these modern
          tools using React, Gatsby.js, Node.js, GraphQL and Cloudinary to be
          fast, interactive, and adaptive to a variety of device screen sizes.
        </p>
        <p>
          From my travel photography and my coverage of the dance music scenes
          to my work in fashion, lifestyle, portraiture, food, drinks,
          technology events and videos, this website attempts to take you on a
          journey with me, bringing attention to the images and experiences that
          I hold my most dear to my heart and that has changed the course of my
          life. It is still a work in progress. Coming soon...weddings and
          bodyart. If you have any thoughts or suggestions please reach out to
          me on{" "}
          <a
            href="https://www.facebook.com/stevehanphoto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          or <a href="/contact">contact me here</a>.
        </p>
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


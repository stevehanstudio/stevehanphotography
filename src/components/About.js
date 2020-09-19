import React from "react"
import styled from "styled-components"
import Title from "./Title"

const About = () => {
  return (
    <Wrapper className="section">
      <Title title="About" />
      <div className="section">
        <p>
          This purpose of this website is to showcase my journey as a
          photographer and my experiences and showcase the images that will the most memorable in my journey.
        </p>
        <h3>About Me</h3>
        <p>
          My journey as a photographer started with my travels, photographing friends, and documenting the trips and experiences.
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .section {
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0.1rem;
    max-width: 1000px;
    /* safari workaround */
    h3 {
      text-transform: uppercase;
      font-weight: 500;
    }
    p {
      font-size: 1.1rem;
      line-height: 2rem;
      color: lightgrey;
    }
/*    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }*/
  }
`
export default About

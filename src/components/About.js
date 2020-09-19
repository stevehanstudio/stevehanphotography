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
        <h4>About Me</h4>
        <p>
          My journey as a photographer started with my travels, photographing friends, and documenting the trips and experiences.
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .section-center {
    margin-top: 4rem;
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .icon {
      font-size: 4rem;
      color: var(--clr-primary-5);
      margin-bottom: 1rem;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 500;
    }
    p {
      color: var(--clr-grey-3);
      max-width: 35em;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
export default About

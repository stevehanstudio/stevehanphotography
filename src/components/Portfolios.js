import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const Portfolios = ({ portfolios }) => {
  return (
    <Wrapper>
      <div className="container">
        {portfolios.map(item => {
          const { id } = item
          const fluid = item.fluid
          //const { name } = item.data
          //const fluid = item.data.image.localFiles[0].childImageSharp.fluid
          const name = "Temp"
          console.log(id, name, fluid)
          return <article key={id}>
            <div className="img-container">
              <Image fluid={fluid} className="img" />
              <div className="info">
                <h3>{name}</h3>
              </div>
            </div>
          </article>
        })}
      </div>
    </Wrapper>    
  )
}

const Wrapper = styled.section`
  margin-top: 0;
  .container {
    margin-top: 0;
    /*margin-top: 4rem;*/
    max-width: 100%;
    /*    max-width: var(--max-width);*/
    display: grid;
    gap: 0;
    /* safari workaround */
    grid-gap: 0;
    .img {
      /*      height: 10rem;
      transition: var(--transition);*/
      /*      transition: 1s ease-in-out;*/
    }
    article {
      animation-name: img-load;
      animation-duration: 650ms;
      transform-style: preserve-3d;
      /*  box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);*/
    }
    article:hover {
      border: 2px solid white;
      /*      box-shadow: var(--dark-shadow);*/
    }
    */ .img-container {
      /*      width: 33%;
      max-width: 33%;*/
      perspective: 1300px;
      position: relative;
      overflow: hidden;
      &:hover .img {
        opacity: 0.5;
        transform: scale(1.1);
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        transition: var(--transition);
        color: rgba(255, 255, 255, 0.75);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        color: rgba(255, 255, 255, 1);
      }
    }
    @media (min-width: 768px) {
      .img {
        /*height: 15rem;*/
        height: auto;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
        /*        height: 12.5rem;*/
        height: auto;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        /*        height: 15rem;*/
        height: auto;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }

  @keyframes img-load {
    0% {
      transform: translateZ(400px) translateY(100%) rotateX(-90deg);
      opacity: 1;
    }
    100% {
      transform: translateZ() (0px) translateZ(0%) rotateX(0deg);
      opacity: 1;
    }
  }
`

export default Portfolios

import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const Portfolios = ({ portfolios }) => {
  return (
    <Wrapper>
      <div className="container">
        {portfolios.map(item => {
          const { id } = item
          const fluid = item.fluid
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
  display: block;
  margin-top: 0;
  width: 100vw;
  height: 600px;
  min-height: 600px;
  max-height: 600px;
  background: blue;
  .container {
    /*    display: flex;
    flex-direction: column;*/
    background: blue;
    margin-top: 0;
    /*margin-top: 4rem;*/
    width: 100vw;
    max-width: 100%;
    height: 500px;
    /*    max-width: var(--max-width);*/
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    /* safari workaround */
    grid-gap: 0;
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

    .img {
      /*      height: 10rem;
      transition: var(--transition);*/
      /*      transition: 1s ease-in-out;*/
    }
    article {
      animation-name: img-load;
      animation-duration: 650ms;
      transform-style: preserve-3d;
    }
    article:hover {
      border: 2px solid white;
    }
    .img-container {
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
        transition: all 0.3s linear;
        color: rgba(255, 255, 255, 0.75);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: white;
          text-transform: uppercase;
        }
      }
      &:hover .info {
        color: rgba(255, 255, 255, 1);
      }
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

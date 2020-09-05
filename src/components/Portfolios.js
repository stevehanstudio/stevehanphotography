import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const Portfolios = ({ portfolios }) => {
  return (
    <Wrapper className="section">
      <div className=" section-center">
        {portfolios.map(item => {
          const { id } = item
          const fluid = item.fluid
          //const { name } = item.data
          //const fluid = item.data.image.localFiles[0].childImageSharp.fluid
          const name = "Temp"
          console.log(id, name, fluid)
          return <article key={id}>
            <div className="container">
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
//  background: var(--clr-grey-10);
  .section-center {
    margin-top: 0;
    /*margin-top: 4rem;*/
    max-width: 100%;
//    max-width: var(--max-width);
    display: grid;
    gap: 0;
    /* safari workaround */
    grid-gap: 0;
    .img {
//      height: 10rem;
//      border-radius: var(--radius);
//      transition: var(--transition);
      transition: 1s ease-in-out;
    }
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
//      width: 33%;
//      max-width: 33%;
      position: relative;
      overflow: hidden;
      //border-radius: var(--radius);
      //background: var(--clr-primary-7);
      //background: black;
      &:hover .img {
//        color: rgba(0,255,255,1)
        //opacity: 0.2;
        opacity: 0.5;
        transform: scale(1.1)
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
//        opacity: 0;
        transition: var(--transition);
        color: rgba(255,255,255,0.75);
        //color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        color: rgba(255,255,255,1);
//        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      .img {
        //height: 15rem;
        height: auto;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
//        height: 12.5rem;
        height: auto;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
//        height: 15rem;
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
`


export default Portfolios

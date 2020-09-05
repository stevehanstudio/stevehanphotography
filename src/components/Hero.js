import React, { useState, useEffect } from "react"
import Background from "./Background"
import styled from "styled-components"
import { Link } from "gatsby"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const Hero = ({ portfolios }) => {
  console.log("portfolios", portfolios)
  const images = portfolios.map(item => {
    console.log(item)
//    const image = item.fluid
    const {node: { fluid: image} } = item
    console.log(image)
    return image
  })

  console.log("images", images);

  const [index, setIndex] = useState(0)
  useEffect(() => {
    const lastIndex = images.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, images])

  return (
    <Wrapper>
      <Background image={images[index]}>
        <article>
{/*          <h1>{name}</h1>
          <Link to="portfolios">Portfolios</Link>*/}
        </article>
      </Background>
      <button className="prev-btn" onClick={() => setIndex(index-1)}>
        <FiChevronLeft />
      </button>
      <button className="next-btn" onClick={() => setIndex(index+1)}>
        <FiChevronRight />
      </button>
      <div className="dots">
        {images.map((_, btnIndex) => {
          return (
            <span 
              key={btnIndex}
              onClick={() => setIndex(btnIndex)}
              className={index === btnIndex ? "active" : undefined}
            ></span>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  article {
    width: 85vw;
    max-width: 800px;
    color: var(--clr-white);
    text-align: center;
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 2rem 0 3rem 0;
      letter-spacing: 3px;
    }
    h3 {
      font-weight: 400;
    }
    a {
      background: transparent;
      border: 2px solid var(--clr-white);
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-white);
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }
    a:hover {
      background: var(--clr-white);
      color: var(--clr-black);
    }
    @media (min-width: 800px) {
      a {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
      }
      h1 {
        letter-spacing: 5px;
      }
    }
  }
  .next-btn,
  .prev-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5rem;
    background: transparent;
    color: var(--clr-white);
    border: transparent;
    cursor: pointer;
    transition: var(--transition);
    @media (min-width: 800px) {
      & {
        font-size: 4.5rem;
      }
    }
  }
  .next-btn:hover,
  .prev-btn:hover {
    color: var(--clr-primary-5);
  }
  .prev-btn {
    left: 0;
  }
  .next-btn {
    right: 0;
  }

  @media (min-width: 1000px) {
    .prev-btn {
      left: 3rem;
    }
    .next-btn {
      right: 3rem;
    }
  }

  .dots {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    span {
      display: block;
      cursor: pointer;
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 50%;
      background: transparent;
      margin: 0 1rem;
      border: 2px solid var(--clr-white);
      @media (min-width: 800px) {
        & {
          height: 1rem;
          width: 1rem;
        }
      }
    }
    span.active {
      background: var(--clr-white);
    }
  }
`

export default Hero

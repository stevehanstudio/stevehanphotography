import React from 'react'
import styled from 'styled-components'
import { Layout, SEO, Title } from "../components"
import { Link } from 'gatsby'

const Success = () => {
  return <Layout>
    <SEO title="Contact submission success" description="Contact form submission is successful." />
    <Wrapper>
      <div className="page-center">
        <Title title="Success!" />
        <h3>Your submission was recieved!  I'll be responding to you shortly</h3>
        <Link to="/" className="btn">
          back home
      </Link>
      </div>
    </Wrapper>
  </Layout>
}

const Wrapper = styled.main`
  margin-top: -5rem;
//  background: var(--clr-primary-8);
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  padding: 0 1rem;
  div {
    text-align: center;
//    color: var(--clr-white);
  }
  h1 {
    font-size: 5rem;
  }
  h3 {
    text-transform: none;
    margin-top: 1.5rem;
    margin-bottom: 1.75rem;
  }
  a {
    color: rgba(203, 230, 255, 0.95);
    &:hover {
      color: white;
    }
  }
`

export default Success


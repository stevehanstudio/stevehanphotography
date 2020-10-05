import React from "react"
import styled from "styled-components"
import _ from "lodash"

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h1>{_.capitalize(title)}</h1>
    </Wrapper>
  ) 
}
const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  @media(min-width: 600px) {
    padding: 0;  
    margin: 2rem auto;
  }
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 500;
/*    span {
      font-size: 0.85em;
      color: grey;
      margin-right: 1rem;
      font-weight: 700;
    }*/
  }
`
export default Title

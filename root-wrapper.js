import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { GatsbyProvider } from './src/context/context'

const GlobalStyle = createGlobalStyle`
   *,
   ::after,
   ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   body {
      font-family: "Roboto";
      background: black;
      color: grey;
      line-height: 1.5;
      font-size: 0.875rem;
   }
   ul {
      list-style-type: none;
   }
   a {
      text-decoration: none;
   }
   img {
//      width: 100%;
      display: block;
   }

   h1,
   h2,
   h3,
   h4 {
      letter-spacing: 0.1rem;
      text-transform: capitalize;
      line-height: 1.25;
      margin-bottom: 0.75rem;
      font-family: "Roboto";
      font-weight: 400;
   }
   h1 {
      font-size: 2rem;
   }
   h2 {
      font-size: 2rem;
   }
   h3 {
      font-size: 1.25rem;
   }
   h4 {
      font-size: 0.875rem;
   }
   p {
      margin-bottom: 1.25rem;
      color: grey;
   }
   @media screen and (min-width: 800px) {
      h1 {
         font-size: 3.5rem;
      }
      h2 {
         font-size: 2.5rem;
      }
      h3 {
         font-size: 1.35rem;
      }
      h4 {
         font-size: 1rem;
      }
      body {
         font-size: 1rem;
      }
      h1,
      h2,
      h3,
      h4 {
         line-height: 1;
      }
   }
   .btn {
      text-transform: uppercase;
      background: grey;
      color: rgba(0, 0, 0, 0.6);
      padding: 0.375rem 0.75rem;
      letter-spacing: 0.1rem;
      display: inline-block;
      font-weight: 400;
      transition: all 0.3s linear;
      font-size: 0.875rem;
      border: 2px solid transparent;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      border-radius: 0.25rem;
   }

   .btn:hover {
      background: blue;
      color: white;
   }

   /* section */
   .section {
      //padding: 5rem 0;
      position: relative;
   }

   .section-center {
      width: 100vw;
      //width: 90vw;
      //margin: 0 auto;
      //max-width: var(--max-width);
   }

   .react-images__view-image {
      max-height: 100vh !important;
   }

`

export const wrapRootElement = ({ element }) => {
   return (
      <>
         <GlobalStyle />
         <GatsbyProvider>
            {element}
         </GatsbyProvider>
      </>
   )
}
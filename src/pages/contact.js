import React from 'react'
import styled from 'styled-components'
import { Layout, SEO, Title } from "../components"

const Contact = () => {
   return (
     <Layout>
       <SEO title="Contact" />
       <Wrapper>
         <Title title="Contact Me" />
          <form 
              name="stevehanphotography-contact"
              method="post"
              netlify-honeypot="bot-field"
              action="/success" 
              data-netlify="true"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="stevehanphotography-contact" />
            <div className="fields">
             <input
               type="text"
               name="name"
               id="name"
               className="form-control"
               placeholder="Your Name"
             />
           </div>
           <div className="fields">
             <input
               type="email"
               name="email"
               id="email"
               className="form-control"
               placeholder="Your Email"
             />
           </div>
           <div className="fields">
             <input
               type="text"
               name="subject"
               id="subject"
               className="form-control"
               placeholder="Subject"
             />
           </div>
           <div className="fields">
             <textarea
               name="message"
               id="message"
               className="form-control"
               rows="8"
               placeholder="Your message"
             />
           </div>
           <div className="fields">
             <div data-netlify-recaptcha="true"></div>
           </div>
           <div>
             <input type="submit" value="submit" className="submit" />
           </div>
         </form>
       </Wrapper>
     </Layout>
   )
}

export default Contact

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  //   justify-content: center;
  width: 100vw;   
  height: 100vh;
  padding-right: 15px;
  position: relative;
  overflow-x: hidden;
  overlow-y: scroll;
  @media (min-width: 600px) {
    max-width: 800px;
    width: 80vw;
    overflow-x: visible;
    margin-left: auto;
    margin-right: auto;
  }
/*  h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    @media (min-width: 600px) {
        margin-top: 4rem;
        margin-bottom: 3.2rem;
    }
  }*/
  form {
    width: 100%;
    margin-left: 8px;
    margin-right: 25px;
    margin-top: 0px;
    margin-bottom: 0px;   
  }
  input, textarea {
    padding: 14px;
    margin: 12px 0px;
    margin-right: 40px;
    width: 100%;
    border-radius: 8px;
    font-size: 1.1rem;
    font-family: lato;
    @media (min-width: 600px) {
      font-size: 1.15rem;
    }
  }
  .submit {
    text-transform: uppercase;
    color: white;
    background: #0078f2; 
    //#1877F2;
    //rgb(0, 107, 217);
    &:hover {
      background: #007dfc;
      //rgb(13, 133, 255);
    }
  }
`
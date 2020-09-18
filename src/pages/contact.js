import React from 'react'
import style from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
   return (
     <Layout>
       <SEO title="Contact" />
       <Wrapper>
         <h2>Contact Me</h2>
         <form action="POST" data-netlify="true">
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
               placeholder="subject"
             />
           </div>
           <div className="fields">
             <textarea
               name="message"
               id="message"
               className="form-control"
               rows="10"
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

const Wrapper = style.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;   
   height: 100vh;
   margin: 0 auto;
   position: relative;
   overflow-x: hidden;
   overlow-y: scroll;
   @media (min-width: 600px) {
     max-width: 800px;
      width: 80vw;
      overflow-x: visible;
   }
   h2 {
      margin-top: 1.8rem;
      margin-bottom: 1.4rem;
      text-align: center;
      @media (min-width: 600px) {
         margin-top: 4rem;
         margin-bottom: 3.2rem;
      }
   }
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

   }

`
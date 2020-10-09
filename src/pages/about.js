import React from "react"
import { Layout, SEO, About } from "../components"

const about = ({ data }) => {
  //console.log("about", data)
  const {excerpt} = data.markdownRemark
  return (
    <Layout>
      <SEO title="About" description={excerpt} />
      <About data={data.markdownRemark} />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      html
      frontmatter {
        image
        imageDesc
        title
      }
      excerpt(format: PLAIN, truncate: false, pruneLength: 1200)
    }
  }
`

export default about

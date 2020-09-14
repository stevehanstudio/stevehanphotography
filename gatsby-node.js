/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Image Gallery Remark ?

const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({node, getNode, actions}) => {
   console.log("createNode", node.internal.type);
   // Create slugs for each portfolio
   if (node.internal === "File") {
      //console.log(createFilePath({ node, getNode, basePath: `images/` }));

      //const slug = createFilePath({ node, getNode, basePath: `images/` })
      /*createNodeField({
         node,
         name: "slug",
         value: slug
      })*/
   }
}

exports.createPages = ({graphql, actions}) => {
   
}
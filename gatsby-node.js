const path = require('path')

exports.createPages = async ({graphql, actions}) => {
   const {createPage} = actions

   const result = await graphql(`
      {
         allPortfoliosYaml {
            nodes {
               photos {
                  caption
                  name
               }
               slug
               title
               description
            }
         }
      }
   `)

   result.data.allPortfoliosYaml.nodes.forEach((node) => {
      const {title, slug, description} = node
      const {name, caption} = node.photos
//      console.log("createPage", node, title, slug, name, caption)
      createPage({
         path: `/portfolios/${title}`,
         component: path.resolve('./src/templates/gallery-query.js'),
         context: {
            name: title,
            slug: slug,
            caption: caption,
            description: description
         }
      })
   })
}


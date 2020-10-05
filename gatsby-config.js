require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Steve Han Photography portfolio`,
    description: `Photography and video portfolio site built using React, Gatsby, Cloudinary, Gatsby Background Image, Gatsby Transformer Cloudinary plugins and React Context API. Styled using Styled-Components. `,
    author: `Steve Han`,
    titleTemplate: `%s | Steve Han Photography`,
    url: `https://www.stevehanphotography.com`,
    image: `/mainBcg.png`,
    twitterUsername: `@stevehanphoto`,
    siteUrl: `https://www.stevehanphotography.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolios`,
        path: `${__dirname}/src/portfolios`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bcg`,
        path: `${__dirname}/src/images/bcg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `travel`,
        path: `${__dirname}/src/images/travel`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `music`,
        path: `${__dirname}/src/images/music`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fashion`,
        path: `${__dirname}/src/images/fashion`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lifestyle`,
        path: `${__dirname}/src/images/lifestyle`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portrait`,
        path: `${__dirname}/src/images/portrait`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `techEvents`,
        path: `${__dirname}/src/images/techEvents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `restaurants`,
        path: `${__dirname}/src/images/restaurants`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/images/video`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        overwriteExisting: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variable: true,
            variants: [`200...900`],
          },
          {
            family: `Open Sans`,
            variable: true,
            variants: [`200...900`],
          },
          {
            family: `Caveat`,
            variable: true,
            variants: [`200...900`],
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-178415099-1`,
        head: true,
        siteSpeedSampleRate: 100,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-TMS433R`,
        includeInDevelopment: true,
      },
    },
  ],
}

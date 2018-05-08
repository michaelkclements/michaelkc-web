require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: ``,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:500,700,800,900`
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACEID || '',
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESSTOKEN || '',
      },
    },
    `gatsby-transformer-remark`
  ],
};

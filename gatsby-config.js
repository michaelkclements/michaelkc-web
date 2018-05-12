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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "michaelkc.com",
        short_name: "michaelkc",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icon: "src/images/touch-icon-144.png",
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

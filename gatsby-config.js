module.exports = {
  siteMetadata: {
    title: ``,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:700,800,900`
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2fy2lwpo0ob4`,
        accessToken: `b5607c89113a330301fc5410c5e3bcd2d8fe20bd90b133f8b3430f5f7e04d40d`,
      },
    },
    `gatsby-transformer-remark`
  ],
};

module.exports = {
  siteMetadata: {
    title: `Nathan Yocum -- GitHub`,
    description: `Nathan Yocum's GitHub profie`,
    author: `NathanYocum`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: '#ffffff',
        theme_color: '#111111',
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      }
    }
  ]
};

module.exports = {
  siteMetadata: {
    title: `Timothy Mayer Artworks`,
    description: `Timothy Mayer is a professional artist and photographer. His passion for creating paintings that began in childhood, and more than three decades of professional landscape and portrait photography.`,
    author: `@mcespo`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        yandex: false,
        windows: false,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

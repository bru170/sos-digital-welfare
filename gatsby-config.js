module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "sos-digital-welfare"
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `http://localhost:10018/graphql`,
        hostingWPCOM: false
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Sans\:200, 400, 500, 600, 700, 800, 900`,
          `Helvetica Neue\:200, 400, 500, 600, 700, 800, 900`,
          `sans-serif\:200, 400, 500, 600, 700, 800, 900`
        ],
        display: `swap`
      }
    }
  ]
}

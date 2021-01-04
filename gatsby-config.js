module.exports = {
  siteMetadata: {
    title: "AudioC0re",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "8fHh-XC-6exYpybKpgZt_OvXqsodb3PmHe9l0h4Q0_o",
        spaceId: "mixvnnurkynt",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

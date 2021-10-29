module.exports = {
  siteMetadata: {
    title: "Bosteels Agency",
    description: "Artist agency was founded in africa bless the rains",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://bosteels-agency.local/graphql",
      },
    },
  ],
}

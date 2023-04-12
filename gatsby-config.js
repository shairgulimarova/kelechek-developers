/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'kelechek-developers', 
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [`gatsby-plugin-sass`, 
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `projects`,
      path: `${__dirname}/kelechek-developers/projects`,
    }
  },
 'gatsby-plugin-mdx',
],
}

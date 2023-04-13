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
      name: `mylist`,
      path: `${__dirname}/kelechek-developers/mylist`,
    }
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${__dirname}/src/pages`,
      ignore: [`foo-bar.js`],
    },
  },
 'gatsby-plugin-mdx',
 'react'
],
}

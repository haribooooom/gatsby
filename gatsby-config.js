/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [],

  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `noma log`,
    short_name: `GatsbyJS`,
    start_url: `/`,
    background_color: `#ffffff`,
    theme_color: `#44cb7d`,
    display: `minimal-ui`,
    icon: `/static/icon.ico`, // ← ここ！！
  },
},

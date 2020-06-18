/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Random Picker`,
    description: `Create lists to randomly choose from.`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Red Hat Display", "Alegreya Sans"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Random Picker`,
        short_name: `Random Picker`,
        start_url: `/`,
        background_color: `#fad1e8`,
        theme_color: `#fad1e8`,
        display: `standalone`,
        icon: `static/icon.png`,
      },
    },
  ],
}

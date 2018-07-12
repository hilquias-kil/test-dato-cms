module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `c72ae1b2641c72d76262051d543fdb`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Photon',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Photon by HTML5 UP'
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://techcare.us20.list-manage.com/subscribe/post?u=d4bfd58ff7fa6936df11c0095&amp;id=81e17a31a6' // add your MC list endpoint here; see instructions below
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ]
};

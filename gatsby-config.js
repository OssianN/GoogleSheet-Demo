require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  console.log(spaceId, accessToken)
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Work Sans\:100,300,400,600,700,800,900`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}

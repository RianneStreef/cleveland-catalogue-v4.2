module.exports = {
  siteMetadata: {
    title: `cleveland-catalogue-v4.2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "YSyuEGIw0xaZqPb7bL_BOx2Iaq69iTTLAJJ-vijZV-c",
      "spaceId": "nrm4fnrqd3vr"
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-react-helmet"]
};
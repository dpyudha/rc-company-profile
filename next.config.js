const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

require('dotenv').config()

module.exports = withCSS(withSass( withImages({
    env: {
        API_ENDPOINT: process.env.API_ENDPOINT,
    },
})));

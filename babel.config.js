module.exports = {
  presets: [
    '@vue/app'
  ],
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
}

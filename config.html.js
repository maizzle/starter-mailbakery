module.exports = {
  build: {
    destination: {
      path: 'dist/html',
    },
    templates: {
      root: 'src/templates/html',
    },
  },
  inlineCSS: {
    enabled: true,
  },
  prettify: {
    enabled: true,
  },
  removeUnusedCSS: {
    enabled: true,
  },
}

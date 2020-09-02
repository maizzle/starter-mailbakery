module.exports = {
  build: {
    templates: {
      source: 'src/templates/html',
      destination: {
        path: 'dist/html',
      },
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

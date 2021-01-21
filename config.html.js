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
    mergeLonghand: true
  },
  prettify: true,
  removeUnusedCSS: true,
}

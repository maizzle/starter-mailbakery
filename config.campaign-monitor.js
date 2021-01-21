module.exports = {
  build: {
    templates: {
      source: 'src/templates/campaign-monitor',
      destination: {
        path: 'dist/campaign-monitor',
      },
    },
  },
  inlineCSS: true,
  prettify: true,
  removeUnusedCSS: true,
}

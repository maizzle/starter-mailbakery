module.exports = {
  build: {
    templates: {
      source: 'src/templates/campaign-monitor',
      destination: {
        path: 'dist/campaign-monitor',
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

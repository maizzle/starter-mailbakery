module.exports = {
  build: {
    destination: {
      path: 'dist/campaign-monitor',
    },
    templates: {
      root: 'src/templates/campaign-monitor',
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

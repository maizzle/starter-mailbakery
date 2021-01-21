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
    mergeLonghand: true
  },
  prettify: true,
  removeUnusedCSS: true,
}

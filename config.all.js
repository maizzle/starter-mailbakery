module.exports = {
  build: {
    destination: {
      path: 'dist',
    },
    templates: {
      source: 'src/templates',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
    },
  },

  prettify: {
    enabled: true,
  },

  minify: {
    enabled: false,
    minifyCSS: true,
    maxLineLength: 500,
    collapseWhitespace: true,
    processConditionalComments: true,
  },
}

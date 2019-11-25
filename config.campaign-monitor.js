module.exports = {
  build: {
    destination: {
      path: 'dist/campaign-monitor',
    },
    layout: 'src/layouts/default.njk',
    templates: {
      source: 'src/templates/campaign-monitor',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
    },
    replaceStrings: {
      '\\s(style|class)(=""|(?=>)|(?=\\s))+': '', // remove empty style or class attributes
    },
  },

  prettify: {
    enabled: true,
  },
}

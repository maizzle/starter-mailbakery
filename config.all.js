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
      doNotRemoveHTMLCommentsWhoseOpeningTagContains: ["*|"],
    },
    replaceStrings: {
      '\\s(style|class)(=""|(?=>)|(?=\\s))+': '', // remove empty style or class attributes
    },
  },

  prettify: {
    enabled: true,
  },
}

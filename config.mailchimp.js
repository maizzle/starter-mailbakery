module.exports = {
  build: {
    destination: {
      path: 'dist/mailchimp',
    },
    layout: 'src/layouts/mailchimp.njk',
    templates: {
      source: 'src/templates/mailchimp',
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

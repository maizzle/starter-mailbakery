module.exports = {
  build: {
    templates: {
      source: 'src/templates/mailchimp',
      destination: {
        path: 'dist/mailchimp',
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
    doNotRemoveHTMLCommentsWhoseOpeningTagContains: ['[if', '[endif', '*|'],
  },
}

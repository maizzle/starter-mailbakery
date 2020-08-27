module.exports = {
  build: {
    destination: {
      path: 'dist/mailchimp',
    },
    templates: {
      root: 'src/templates/mailchimp',
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

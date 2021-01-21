module.exports = {
  build: {
    templates: {
      source: 'src/templates/mailchimp',
      destination: {
        path: 'dist/mailchimp',
      },
    },
  },
  inlineCSS: true,
  prettify: true,
  removeUnusedCSS: {
    doNotRemoveHTMLCommentsWhoseOpeningTagContains: ['[if', '[endif', '*|'],
  },
}

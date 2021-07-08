/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: [
      // HTML versions
      {
        source: 'src/templates/html',
        destination: {
          path: 'dist/html',
        },
      },
      // Campaign Monitor versions
      {
        source: 'src/templates/campaign-monitor',
        destination: {
          path: 'dist/campaign-monitor',
        },
      },
      // MailChimp versions
      {
        source: 'src/templates/mailchimp',
        destination: {
          path: 'dist/mailchimp',
        },
      },
    ],
  },
  inlineCSS: {
    mergeLonghand: true
  },
  prettify: true,
  removeUnusedCSS: {
    doNotRemoveHTMLCommentsWhoseOpeningTagContains: ['[if', '[endif', '*|'],
  },
}

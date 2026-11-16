// Measurement. Off until `domain` is set. The provider is Plausible: no cookies and no personal data,
// so the site needs no consent banner. Set `domain` to the site's address in Plausible to turn it on.
export const analytics = {
  domain: '',
  script: 'https://plausible.io/js/script.tagged-events.js',
};

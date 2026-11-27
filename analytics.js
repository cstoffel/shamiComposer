// Google Analytics 4 for the static pages (about/, bunkafu/). The app itself
// loads gtag.js from Dart (lib/analytics/). CI replaces the placeholder
// below with the GA_MEASUREMENT_ID repository variable; left as is (local
// builds), nothing is sent.
(function () {
  var id = 'G-V6KVMPLHBN';
  if (id.indexOf('G-') !== 0) {
    return;
  }
  // The app's "Send anonymous usage statistics" switch, stored by
  // shared_preferences on the same origin.
  try {
    if (localStorage.getItem('flutter.analyticsEnabled') === 'false') {
      return;
    }
  } catch (e) {
    // Storage blocked: carry on with the default (on).
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', id);
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(script);
})();

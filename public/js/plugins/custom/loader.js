(function () {
  "use strict";
  var tpj = jQuery;
  var revapi68;
  tpj(document).ready(function () {
    if (tpj("#rev_slider").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider");
    } else {
      revapi68 = tpj("#rev_slider")
        .show()
        .revolution({
          sliderType: "hero",
          jsFileLocation: "js/plugins/revolution/js/",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {},
          responsiveLevels: [1240, 1024, 778, 480],
          gridwidth: [1400, 1240, 778, 480],
          gridheight: [768, 768, 960, 720],
          lazyType: "none",
          parallax: {
            type: "mouse+scroll",
            origo: "slidercenter",
            speed: 2000,
            levels: [1, 2, 3, 20, 25, 30, 35, 40, 45, 50],
            disable_onmobile: "on",
          },
          shadow: 0,
          spinner: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            disableFocusListener: false,
          },
        });
    }
  });
})(jQuery);

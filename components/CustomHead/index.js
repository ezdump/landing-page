import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/img/whiteLogo.ico" />
      <meta
        property="og:image"
        content="https://www.ezdumptruck.com/img/imageLogo.ico"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="We are focused on job optimizations, making it transparent and flexible for all parts. Completely digital, to stay organized and accessible all the time."
      />
      <meta
        property="og:description"
        content="We are focused on job optimizations, making it transparent and flexible for all parts. Completely digital, to stay organized and accessible all the time."
      />
      <meta property="og:title" content="EZ Dump Trucks App" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ezdumptruck.com" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="msapplication-TileImage"
        content="/whiteLogo.ico"
      />
      <link rel="apple-touch-icon" href="/imageLogo.ico" />
      <meta
        name="keywords"
        content="dumptrucks, dump trucks, dumps, trucks, contractors, owners, drivers"
      />
      <link rel="canonical" href="https://ezdumptruck.com/" />
      <meta name="robots" content="follow" />
      <meta charSet="utf-8" />
      <title>Ez Dump Trucks App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900"
        rel="stylesheet"
      />

      <script type="text/javascript" src="/js/jquery-2.2.4.min.js"></script>
      <script
        type="text/javascript"
        src="/js/plugins/jquery.easing.1.3.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/bootstrap.bundle.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/jquery.bxslider.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/jquery.filterizr.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/jquery.magnific-popup.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/jquery.singlePageNav.min.js"
      ></script>

      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/jquery.themepunch.tools.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/jquery.themepunch.revolution.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/extensions/revolution.extension.actions.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/extensions/revolution.extension.carousel.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/extensions/revolution.extension.migration.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/extensions/revolution.extension.navigation.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/extensions/revolution.extension.parallax.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/js/plugins/revolution/js/extensions/revolution.extension.video.min.js"
      ></script>

      {/* <script type="text/javascript" src="/js/custom.js"></script> */}
      {/* <script type="text/javascript" src="/js/plugins/custom/loader.js"></script> */}
      <script
        type="text/javascript"
        src="/js/plugins/custom/intercom.js"
      ></script>
      <script>
        {
          `(function () {
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
          })(jQuery);`
        }
      </script>
    </Head>
  );
};

export default CustomHead;

import React from "react";
import Image from "next/image";
const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      {/* Container Starts */}
      <div className="container">
        {/* Main Heading Starts */}
        <div className="text-center top-text">
          <h1>
            <span>Our</span> Portfolio
          </h1>
          <h4>Our latest Works</h4>
        </div>
        {/* Main Heading Starts */}
        {/* Divider Starts */}
        <div className="divider text-center">
          <span className="outer-line"></span>
          <span className="fa fa-image" aria-hidden="true"></span>
          <span className="outer-line"></span>
        </div>
        {/* Divider Ends */}
        {/* Filter Wrapper Starts */}
        <nav>
          <ul className="simplefilter nav nav-pills d-block">
            {/* Filter Wrapper Items Starts */}
            <li className="active" data-filter="all">
              <i className="fa fa-reorder"></i> All Projects
            </li>
            <li data-filter="1">Images</li>
            <li data-filter="2">Videos</li>
            <li data-filter="3">External Links</li>
            {/* Filter Wrapper Items Ends */}
          </ul>
        </nav>
        {/* Filter Wrapper Ends */}
        <div>
          <div className="filtr-container">
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 filtr-item"
              data-category="1"
            >
              <div className="magnific-popup-gallery">
                {/* Thumbnail Starts */}
                <figure className="thumbnail thumbnail__portfolio">
                  <a
                    className="image-wrap"
                    href="http://via.placeholder.com/700x470"
                    data-gal="magnific-pop-up[image]"
                    title="Image project"
                  >
                    <Image
                      className="img-fluid"
                      src="http://via.placeholder.com/700x470"
                      alt="Image Project"
                    />
                    <span className="zoom-icon"></span>
                  </a>
                </figure>
                {/* Thumbnail Ends */}
                {/* Caption Starts */}
                <div className="caption">
                  <h3>Single Image</h3>
                  <p>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi
                  </p>
                </div>
                {/* Caption Ends */}
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 filtr-item"
              data-category="2"
            >
              <div className="magnific-popup-gallery">
                {/* Thumbnail Starts */}
                <figure className="thumbnail thumbnail__portfolio">
                  <a
                    className="image-wrap mfp-youtube"
                    href="https://www.youtube.com/watch?v=0gv7OC9L2s8"
                  >
                    <Image
                      className="img-fluid"
                      src="http://via.placeholder.com/700x470"
                      alt="Gallery project"
                    />
                    <span className="zoom-icon video-icon"></span>
                  </a>
                </figure>
                {/* Thumbnail Ends */}
                {/* Caption Starts */}
                <div className="caption">
                  <h3>Youtube Video</h3>
                  <p>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi
                  </p>
                </div>
                {/* Caption Ends */}
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 filtr-item"
              data-category="1"
            >
              <div className="magnific-popup-gallery">
                {/* Thumbnail Starts */}
                <figure className="thumbnail thumbnail__portfolio">
                  <a
                    className="image-wrap"
                    href="http://via.placeholder.com/700x470"
                    data-gal="magnific-pop-up[gallery]"
                    title="Gallery project"
                  >
                    <Image
                      className="img-fluid"
                      src="http://via.placeholder.com/700x470"
                      alt="Gallery project"
                    />
                    <span className="zoom-icon gallery-icon"></span>
                  </a>
                </figure>
                <a
                  href="http://via.placeholder.com/700x470"
                  title="Gallery project"
                  data-gal="magnific-pop-up[gallery]"
                  style={{
                    display: "none",
                  }}
                ></a>
                <a
                  href="http://via.placeholder.com/700x470"
                  title="Gallery project"
                  data-gal="magnific-pop-up[gallery]"
                  style={{
                    display: "none",
                  }}
                ></a>
                <a
                  href="http://via.placeholder.com/700x470"
                  title="Gallery project"
                  data-gal="magnific-pop-up[gallery]"
                  style={{
                    display: "none",
                  }}
                ></a>
                <a
                  href="http://via.placeholder.com/700x470"
                  title="Gallery project"
                  data-gal="magnific-pop-up[gallery]"
                  style={{
                    display: "none",
                  }}
                ></a>
                <a
                  href="http://via.placeholder.com/700x470"
                  title="Gallery project"
                  data-gal="magnific-pop-up[gallery]"
                  style={{
                    display: "none",
                  }}
                ></a>
                <a
                  href="http://via.placeholder.com/700x470"
                  title="Gallery project"
                  data-gal="magnific-pop-up[gallery]"
                  style={{
                    display: "none",
                  }}
                ></a>
                {/* Thumbnail Ends */}
                {/* Caption Starts */}
                <div className="caption">
                  <h3>Gallery Photos</h3>
                  <p>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi
                  </p>
                </div>
                {/* Caption Ends */}
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 filtr-item"
              data-category="3"
            >
              <div className="magnific-popup-gallery">
                {/* Thumbnail Starts */}
                <figure className="thumbnail thumbnail__portfolio">
                  <a className="image-wrap" href="#" title="portfolio">
                    <Image
                      className="img-fluid"
                      src="http://via.placeholder.com/700x470"
                      alt="portfolio"
                    />
                    <span className="zoom-icon external-icon"></span>
                  </a>
                </figure>
                {/* Thumbnail Ends */}
                {/* Caption Starts */}
                <div className="caption">
                  <h3>External Link</h3>
                  <p>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi
                  </p>
                </div>
                {/* Caption Ends */}
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 filtr-item"
              data-category="1"
            >
              <div className="magnific-popup-gallery">
                {/* Thumbnail Starts */}
                <figure className="thumbnail thumbnail__portfolio">
                  <a
                    className="image-wrap"
                    href="http://via.placeholder.com/700x470"
                    data-gal="magnific-pop-up[image]"
                    title="Image project"
                  >
                    <Image
                      className="img-fluid"
                      src="http://via.placeholder.com/700x470"
                      alt="Image Project"
                    />
                    <span className="zoom-icon"></span>
                  </a>
                </figure>
                {/* Thumbnail Ends */}
                {/* Caption Starts */}
                <div className="caption">
                  <h3>Single Image</h3>
                  <p>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi
                  </p>
                </div>
                {/* Caption Ends */}
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 filtr-item"
              data-category="2"
            >
              <div className="magnific-popup-gallery">
                {/* Thumbnail Starts */}
                <figure className="thumbnail thumbnail__portfolio">
                  <a
                    className="image-wrap mfp-youtube"
                    href="https://www.youtube.com/watch?v=O_C5CN1L3Xo"
                  >
                    <Image
                      className="img-fluid"
                      src="http://via.placeholder.com/700x470"
                      alt="Gallery project"
                    />
                    <span className="zoom-icon video-icon"></span>
                  </a>
                </figure>
                {/* Thumbnail Ends */}
                {/* Caption Starts */}
                <div className="caption">
                  <h3>Youtube Video</h3>
                  <p>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi
                  </p>
                </div>
                {/* Caption Ends */}
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 filtr-item"
              data-category="1"
            >
              <div className="magnific-popup-gallery">
                {/* Thumbnail Starts */}
                <figure className="thumbnail thumbnail__portfolio">
                  <a
                    className="image-wrap"
                    href="http://via.placeholder.com/700x470"
                    data-gal="magnific-pop-up[image]"
                    title="Image project"
                  >
                    <Image
                      className="img-fluid"
                      src="http://via.placeholder.com/700x470"
                      alt="Image Project"
                    />
                    <span className="zoom-icon"></span>
                  </a>
                </figure>
                {/* Thumbnail Ends */}
                {/* Caption Starts */}
                <div className="caption">
                  <h3>Single Image</h3>
                  <p>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi
                  </p>
                </div>
                {/* Caption Ends */}
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 filtr-item"
              data-category="2"
            >
              <div className="magnific-popup-gallery">
                {/* Thumbnail Starts */}
                <figure className="thumbnail thumbnail__portfolio">
                  <a
                    className="image-wrap mfp-vimeo"
                    href="https://vimeo.com/23534361"
                  >
                    <Image
                      className="img-fluid"
                      src="http://via.placeholder.com/700x470"
                      alt="Gallery project"
                    />
                    <span className="zoom-icon video-icon"></span>
                  </a>
                </figure>
                {/* Thumbnail Ends */}
                {/* Caption Starts */}
                <div className="caption">
                  <h3>Vimeo Video</h3>
                  <p>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi
                  </p>
                </div>
                {/* Caption Ends */}
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 filtr-item"
              data-category="1"
            >
              <div className="magnific-popup-gallery">
                {/* Thumbnail Starts */}
                <figure className="thumbnail thumbnail__portfolio">
                  <a
                    className="image-wrap"
                    href="http://via.placeholder.com/700x470"
                    data-gal="magnific-pop-up[image]"
                    title="Image project"
                  >
                    <Image
                      className="img-fluid"
                      src="http://via.placeholder.com/700x470"
                      alt="Image Project"
                    />
                    <span className="zoom-icon"></span>
                  </a>
                </figure>
                {/* Thumbnail Ends */}
                {/* Caption Starts */}
                <div className="caption">
                  <h3>Single Image</h3>
                  <p>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi
                  </p>
                </div>
                {/* Caption Ends */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Container Ends */}
    </section>
  );
};

export default Portfolio;

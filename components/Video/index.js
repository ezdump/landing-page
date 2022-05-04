import React, { useState } from "react";
import background from "../../assets/img/slider-background.jpg";

const Video = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    stopVideo();
  };

  const stopVideo = () => {
    var iframe = document.getElementById("ytplayer");
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  };
  
  return (
    <>
      <div className={`video-background ${isVisible ? "open" : ""}`}>
        <div className="video-close-button" onClick={handleClose} />
        <iframe
          id="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/gdwDgEjTbW8?autoplay=0`}
          frameborder="0"
          className={`video-background-iframe ${isVisible ? "open" : ""}`}
        ></iframe>
      </div>
      <section
        className="videopromotion"
        style={{
          backgroundImage: background,
        }}
      >
        <div className="section-overlay" id="video">
          {/* Container Starts */}
          <div className="container">
            {/* Main Heading Starts */}
            <div className="text-center top-text">
              <h2 className="section-title">
                <span>Video</span> Promo
              </h2>
              <h4>Made with love for you</h4>
            </div>
            {/* Main Heading Ends */}
            <div className="video-content">
              <p className="text-center">
                We’re developing a number of special projects if interested,
                <br /> Don't hesitate to see the promo video
              </p>
              {/* Video Play Starts */}
              <div className="magnific-popup-gallery">
                <div className="btn-wrapper text-center">
                  <a
                    className="image-wrap mfp-youtube"
                    href="#video"
                    onClick={() => setIsVisible(true)}
                    /* https://www.youtube.com/watch?v=gdwDgEjTbW8 */
                  ></a>
                </div>
              </div>
              {/* Video Play Ends */}
            </div>
          </div>
          {/* Container Ends */}
        </div>
      </section>
    </>
  );
};

export default Video;

import React from "react";
import background from "../../assets/img/slider-background.jpg";

const Video = () => {
  return (
    <section className="videopromotion" style={{
      backgroundImage: background
    }}>
      <div className="section-overlay">
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
                  href="https://www.youtube.com/watch?v=gdwDgEjTbW8"
                ></a>
              </div>
            </div>
            {/* Video Play Ends */}
          </div>
        </div>
        {/* Container Ends */}
      </div>
    </section>
  );
};

export default Video;

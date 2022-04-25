import React from "react";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="section-overlay">
        {/* Container Starts */}
        <div className="container">
          {/* Main Heading Starts */}
          <div className="text-center top-text">
            <h1>
              <span>Happy</span> Customers
            </h1>
            <h4>Testimonials</h4>
          </div>
          {/* Main Heading Starts */}
          {/* Blockquotes Starts */}
          <div
            id="quote-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* Wrapper For Sliders Starts */}
            {/* Indicators Starts */}
            <ol className="carousel-indicators mx-auto">
              <li
                data-target="#quote-carousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#quote-carousel" data-slide-to="1"></li>
              <li data-target="#quote-carousel" data-slide-to="2"></li>
            </ol>
            {/* Indicators Ends */}
            <div className="carousel-inner">
              {/* Quote #1 Starts */}
              <div className="carousel-item active">
                <blockquote>
                  <img
                    className="rounded-circle img-fluid"
                    src="http://via.placeholder.com/112x112"
                    alt="client"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiu nt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptat
                  </p>
                  <h5>Miss Elina Pool</h5>
                  <h6>Web Developer - Adobe</h6>
                </blockquote>
              </div>
              {/* Quote #1 Ends */}
              {/* Quote #2 Starts */}
              <div className="carousel-item">
                <blockquote>
                  <img
                    className="rounded-circle img-fluid"
                    src="http://via.placeholder.com/112x112"
                    alt="client"
                  />
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu
                  </p>
                  <h5>Mr. Antoine Varane</h5>
                  <h6>Sales Manager - Twitter</h6>
                </blockquote>
              </div>
              {/* Quote #2 Ends */}
              {/* Quote #3 Starts */}
              <div className="carousel-item">
                <blockquote>
                  <img
                    className="rounded-circle img-fluid"
                    src="http://via.placeholder.com/112x112"
                    alt="client"
                  />
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit ess
                  </p>
                  <h5>Miss Lucy Walker</h5>
                  <h6>Project Manager - Envato</h6>
                </blockquote>
              </div>
              {/* Quote #3 Ends */}
            </div>
            {/* Wrapper For Sliders Ends */}
          </div>
          {/* Blockquotes Ends */}
        </div>
        {/* Container Ends */}
      </div>
    </section>
  );
};

export default Testimonials;

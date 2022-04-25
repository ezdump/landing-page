import React from "react";
const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter">
      <div className="section-overlay">
        {/* Container Starts */}
        <div className="container">
          {/* Main Heading Starts */}
          <div className="text-center top-text">
            <h1>
              <span>our</span> newsletter
            </h1>
            <h4>Keep in touch</h4>
          </div>
          {/* Main Heading Ends */}
          <div className="newsletter-content">
            <p className="text-center">
              Sign up to our newsletter subscription and be the first to know
              about
              <br /> Important news <span> &amp; </span> Amazing offers{" "}
              <span> &amp; </span>Discounts
            </p>
            {/* Newsletter Form Starts */}
            <form className="form-inputs">
              {/* Newsletter Form Input Field Starts */}
              <div className="col-md-12 form-group custom-form-group p-0">
                <span className="input custom-input">
                  <input
                    placeholder="Enter Your Email"
                    className="input-field custom-input-field"
                    type="text"
                  />
                  <label className="input-label custom-input-label">
                    <i className="fa fa-envelope-open-o icon icon-field"></i>
                  </label>
                </span>
              </div>
              {/* Newsletter Form Input Field Ends */}
              {/* Newsletter Form Submit Button Starts */}
              <button
                id="submit"
                name="submit"
                type="submit"
                className="custom-button"
                title="Send"
              >
                Subscribe Now
              </button>
              {/* Newsletter Form Submit Button Ends */}
            </form>
            {/* Newsletter Form Ends */}
          </div>
        </div>
        {/* Container Ends */}
      </div>
    </section>
  );
};

export default Newsletter;

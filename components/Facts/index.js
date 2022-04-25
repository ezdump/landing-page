import React from "react";
const Facts = () => {
  return (
    <section className="facts">
      <div className="section-overlay">
        {/* Container Starts */}
        <div className="container">
          {/* Main Heading Starts */}
          <div className="text-center top-text">
            <h1>
              <span>Cool</span> Facts
            </h1>
            <h4>our numbers</h4>
          </div>
          {/* Main Heading Starts */}
          {/* Fact Badges Starts */}
          <div className="fact-badges">
            <div className="row">
              {/* Fact Badge Item Starts */}
              <div className="col-md-3 col-sm-6">
                <i className="fa fa-briefcase"></i>
                <h2>
                  <span>
                    <strong className="badges-counter">77</strong>+
                  </span>
                </h2>
                <h4>Projects</h4>
              </div>
              {/* Fact Badge Item Ends */}
              {/* Fact Badge Item Starts */}
              <div className="col-md-3 col-sm-6">
                <i className="fa fa-clock-o"></i>
                <h2>
                  <span>
                    <strong className="badges-counter">80</strong>+
                  </span>
                </h2>
                <h4>Hours Work</h4>
              </div>
              {/* Fact Badge Item Ends */}
              {/* Fact Badge Item Starts */}
              <div className="col-md-3 col-sm-6">
                <i className="fa fa-home"></i>
                <h2>
                  <span>
                    <strong className="badges-counter">18</strong>+
                  </span>
                </h2>
                <h4>Offices</h4>
              </div>
              {/* Fact Badge Item Ends */}
              {/* Fact Badge Item Starts */}
              <div className="col-md-3 col-sm-6">
                <i className="fa fa-user"></i>
                <h2>
                  <span>
                    <strong className="badges-counter">67</strong>+
                  </span>
                </h2>
                <h4>Clients</h4>
              </div>
              {/* Fact Badge Item Ends */}
            </div>
          </div>
          {/* Fact Badges Ends */}
        </div>
        {/* Container Ends */}
      </div>
    </section>
  );
};

export default Facts;

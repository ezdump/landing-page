import React from "react";
import imgMap from "../../assets/img/map.png";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      {/* Container Starts */}
      <div className="container">
        {/* Main Heading Starts */}
        <div className="text-center top-text">
          <h1>
            <span>Contact</span> Us
          </h1>
          <h4>Get in Touch</h4>
        </div>
        {/* Main Heading Starts */}
        {/* Divider Starts */}
        <div className="divider text-center">
          <span className="outer-line"></span>
          <span className="fa fa-envelope" aria-hidden="true"></span>
          <span className="outer-line"></span>
        </div>
        {/* Divider Ends */}
      </div>
      {/* Container Ends */}
      {/* Info Map Boxes Starts */}
      <div className="container">
        <div className="row info-map-boxes">
          {/* Left Info Map Box Starts */}
          {/* <div className="col-md-6 col-sm-12" style={{
            height: "100%",
          }}>
            <div className="info-map-boxes-item fa fa-clock-o" style={{
              height: "14.5em",
            }}>
              <h1>Working Hours</h1>
              <p>
                Monday-Thursday : 07:00&ndash;17:00
                <br />
                Friday &amp; Saturday : 07:00&ndash;15:00
                <br />
                Sunday : 13:00&ndash;17:00
              </p>
            </div>
          </div> */}
          {/* Left Info Map Box Ends */}
          {/* Right Info Map Box Starts */}
          <div className="col-12">
            <div className="info-map-boxes-item fa fa-phone">
              <h1>Phone &amp; Online</h1>
              <p>
                244 Gordon Park blvd
                <br />
                Clayton NC 27527
                <br />
                Phone : (919)946-8860
                <br />
                Fax : ()
                <br />
                <a href="mailto:support@ezdumptruck.com">
                  support@ezdumptruck.com
                </a>
              </p>
            </div>
          </div>
          {/* Right Info Map Box Ends */}
        </div>
      </div>
      {/* Info Map Boxes Ends */}
    </section>
  );
};

export default Contact;

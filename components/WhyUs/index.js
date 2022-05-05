import React from "react";
import imgMan from "../../assets/img/whyUs/man.jpeg";
import imgLoad from "../../assets/img/whyUs/load.jpg";
import imgPoints from "../../assets/img/about-us-banner-background.svg";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="projectmanager" id="projectmanager">
      {/* Section Overlay Starts */}
      <div className="section-overlay">
        {/* Container Starts */}
        <div className="container">
          <div className="row">
            {/* Image Starts */}
            <div
              className="why_us_images"
              style={{
                position: "relative",
                minWidth: "35em",
                height: "25em",
                display: "in-line",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "20em",
                  top: "-6em",
                  left: "4em",
                }}
                className="img-fluid why_us_points"
              >
                <Image alt="A nice background again" src={imgPoints} />
              </div>
              <div className="yellow_block why_us_block" />
              <div
                style={{
                  position: "absolute",
                  width: "22em",
                  top: "2em",
                  left: "12em",
                }}
                className="img-fluid why_us_load"
              >
                <Image src={imgLoad} alt="Your drivers working" />
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "22em",
                  left: "2em",
                  top: "5em",
                }}
                className="img-fluid why_us_man"
              >
                <Image src={imgMan} alt="You taking it EZ (easy)" />
              </div>
            </div>
            {/* Image Ends */}
            {/* Details Starts */}
            <div className="col-md-12 col-lg-12 col-xl-6 offset-x-1 why_us_content">
              <h2 className="section-title">Why us?</h2>
              <h3>Thriving to help impactful business grow</h3>
              <p>
                At EZ DUMP TRUCK, we believe there is a better way to business
                in the dump truck area. A more valuable, hassle-free, and
                transparent way.
              </p>
              <p>
                We are focused on job optimizations, making it transparent and
                flexible for all parts. Completely digital, to stay organized
                and accessible all the time.
              </p>
              <p>Eliminate human error and never lose a load ticket again.</p>
              {/* Social Media Starts */}
              <div className="social-icons">
                <ul className="social">
                  <li>
                    <a
                      target="_blank"
                      className="twitter"
                      href="https://twitter.com/ezdumptruck"
                      title="twitter"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="facebook"
                      href="https://www.facebook.com/ezdumptruck"
                      title="facebook"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="instagram"
                      href="https://www.instagram.com/ezdumptruck"
                      title="instagram"
                      rel="noreferrer"
                    ></a>
                  </li>
                  {/* <li>
              <a className="google" href="#" title="google"></a>
            </li> */}
                  <li>
                    <a
                      target="_blank"
                      className="youtube"
                      href="https://youtube.com/channel/UC7NpjWOeFq43bo5vGgMKqiw"
                      title="youtube"
                      rel="noreferrer"
                    ></a>
                  </li>
                </ul>
              </div>
              {/* Social Media Ends */}
            </div>
          </div>
          {/* Details Ends */}
        </div>
        {/* Container Ends */}
      </div>
    </section>
  );
};

export default WhyUs;

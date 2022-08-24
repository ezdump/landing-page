import React from "react";
import banner from "../../assets/img/about-us-banner.png";
import imgPoints from "../../assets/img/about-us-banner-background.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="about">
      {/* Container Starts */}
      <div className="container">
        {/* Main Heading Starts */}
        <div className="text-center top-text">
          <h2 className="section-title">
            <span>About</span> Us
          </h2>
          <h4>Who We Are</h4>
        </div>
        {/* Main Heading Ends */}
        {/* Divider Starts */}
        <div className="divider text-center">
          <span className="outer-line"></span>
          <span className="fa fa-user" aria-hidden="true"></span>
          <span className="outer-line"></span>
        </div>
        {/* Divider Ends */}
        {/* About Content Starts */}
        <div className="row about-content">
          <div className="col-sm-12 col-md-12 col-lg-6 about-left-side">
            <h3 className="title-about">EZ DUMP TRUCK INC.</h3>
            <hr />
            <p>
              <span>
                {" "}
                Do you feel that you&apos;re losing control over your business?{" "}
              </span>
              <br />
              <br />
              <span>
                Have you ever felt overwhelmed by paperwork or leads search?
              </span>{" "}
              <br />
              <br />
              <span>
                EZ Dump Truck is your go-to app for efficient Dump Truck
                services. An all-in-one app to find contractors and manage your
                business efficiently and hassle-free.
              </span>
              <br />
              <br />
              <span>
                Handle hirings, manage your drivers, and centralize invoices.
              </span>
            </p>
            <div>
              <a
                //into new tab
                target="_blank"
                href="http://admin.ezdumptruck.com/login"
                className="custom-button slider-button scroll-to-target"
                rel="noreferrer"
              >
                SIGN UP FREE
              </a>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 about-right">
            <div className="about-right-side-x">
              <div className="pointed-background">
                <Image
                  className="img-fluid about-img-points "
                  alt="A nice background for easy dump truck"
                  src={imgPoints}
                  objectFit="cover"
                />
              </div>
              <div className="yellow_block about_us_block" />
              <div className="before-after-image">
                <Image
                  alt="Before Ez easy Dump Truck, After Ez easy Dump Truck"
                  className="img-fluid"
                  src={banner}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* About Content Ends */}
      </div>
      {/* Container Ends */}
    </section>
  );
};

export default AboutUs;

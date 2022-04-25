import React from "react";
import banner from "../../assets/img/about-us-banner.png";
import bannerBackground from "../../assets/img/about-us-banner-background.svg";

const FrequentQuestions = () => {
  return (
    <section id="about" className="about">
      {/* Container Starts */}
      <div className="container">
        {/* Main Heading Starts */}
        <div className="text-center top-text ">
          <h2 className="section-title">
            <span>Frequently</span> Asked Questions
          </h2>
        </div>
        {/* Main Heading Ends */}
        {/* Divider Starts */}
        <div className="divider text-center">
          <span className="outer-line"></span>
          <span className="fa fa-question" aria-hidden="true"></span>
          <span className="outer-line"></span>
        </div>
        {/* Divider Ends */}
        {/* About Content Starts */}
        <div className="row about-content">
          <div className="col-sm-12 col-md-12 col-lg-12 about-left-side">
            {/* Tabs Heading Starts */}
            <ul className="nav nav-tabs nav-questions">
              <li>
                <a className="active" data-toggle="tab" href="#menu1">
                  How much EZ DUMP TRUCK COST?
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#menu2">
                  How does EZ DUMP TRUCK APPS WORK?
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#menu3">
                  What is required to work with EZ DUMP TRUCK ?
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#menu4">
                  HOW DO I GET PAID?
                </a>
              </li>
            </ul>
            {/* Tabs Heading Ends */}
            {/* Tabs Content Starts */}
            <div className="tab-content">
              <div id="menu1" className="tab-pane fade in active">
                <p>
                  Our platforms are 100% FREE and have NO HIDDEN FEES. You can
                  sign up in just a couple seconds and get all the features you
                  want from our platforms to make your journey easier.
                </p>
              </div>
              <div id="menu2" className="tab-pane fade">
                <p>
                  As a contractor, you can find thousands of dump trucks
                  available In your area; in just a click, you can find and book
                  the trucks required for your job.
                </p>
                <p>
                  As a Dump Truck Owner, you can find tons of loads with
                  transparent upfront pricing, and you always have the
                  information needed to make the right business decisions.
                </p>
              </div>

              <div id="menu3" className="tab-pane fade">
                <p>General requirements that you're used to having.</p>
                <p>-Bank account to make your payments quicker.</p>
                <p>-Auto liability insurance.</p>
                <p>-General liability insurance.</p>
                <p>-Worker's compensation insurance.</p>
                <p>-Fill out the subcontractor's agreement.</p>
              </div>
              <div id="menu4" className="tab-pane fade">
                <p>
                  We provide an easy way to get paid; with an automated
                  invoicing and payments platform, you choose and agree on terms
                  to the job you prefer..
                </p>
              </div>
            </div>
            {/* Tabs Content Ends */}
            <div
              className="tp-caption"
              data-x="['left','left','left','left']"
              data-hoffset="['30','30','200','80']"
              data-y="['middle','middle','top','top']"
              data-voffset="['238','238','456','420']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-transform_idle="o:1;"
              data-transform_in="x:-50px;opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:1500;e:Power4.easeIn;s:1500;e:Power4.easeIn;"
              data-start="1750"
              data-splitin="none"
              data-splitout="none"
              data-responsive_offset="on"
              data-responsive="off"
              style={{
                display: "block",
                whiteSpace: "nowrap",
                letterSpacing: "1px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <a
                //into new tab
                target="_blank"
                href="http://admin.ezdumptruck.com/login"
                className="custom-button slider-button scroll-to-target"
              >
                SIGN UP FREE
              </a>
            </div>
          </div>
        </div>
        {/* About Content Ends */}
      </div>
      {/* Container Ends */}
    </section>
  );
};

export default FrequentQuestions;

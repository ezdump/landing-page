import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section id="team" className="team">
      {/* Container Starts */}
      <div className="container">
        {/* Main Heading Starts */}
        <div className="text-center top-text">
          <h1>
            <span>Our</span> Team
          </h1>
          <h4>Keep in touch</h4>
        </div>
        {/* Main Heading Ends */}
        {/* Divider Starts */}
        <div className="divider text-center">
          <span className="outer-line"></span>
          <span className="fa fa-users" aria-hidden="true"></span>
          <span className="outer-line"></span>
        </div>
        {/* Divider Ends */}
        {/* Team Members Starts */}
        <div className="row team-members magnific-popup-gallery">
          {/* Team Member Starts */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-member">
              {/* Team Member Picture Starts */}
              <a
                title="Maryana Mori // Manager"
                href="http://via.placeholder.com/480x600"
                data-gal="magnific-pop-up[team]"
                className="team-member-img-wrap"
              >
                <Image
                  src="http://via.placeholder.com/480x600"
                  alt="team member"
                />
              </a>
              {/* Team Member Picture Ends */}
              {/* Team Member Details Starts */}
              <div className="team-member-caption social-icons">
                <h4>Maryana Mori</h4>
                <p>Manager</p>
                <ul className="list list-inline social">
                  <li>
                    <a href="#" className="fa fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-google-plus"></a>
                  </li>
                </ul>
              </div>
              {/* Team Member Details Starts */}
            </div>
          </div>
          {/* Team Member Ends */}
          {/* Team Member Starts */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-member">
              {/* Team Member Picture Starts */}
              <a
                title="Marco Verratti // Co Founder"
                href="http://via.placeholder.com/480x600"
                data-gal="magnific-pop-up[team]"
                className="team-member-img-wrap"
              >
                <Image
                  src="http://via.placeholder.com/480x600"
                  alt="team member"
                />
              </a>
              {/* Team Member Picture Ends */}
              {/* Team Member Details Starts */}
              <div className="team-member-caption social-icons">
                <h4>Marco Verratti</h4>
                <p>Co Founder</p>
                <ul className="list list-inline social">
                  <li>
                    <a href="#" className="fa fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-google-plus"></a>
                  </li>
                </ul>
              </div>
              {/* Team Member Details Ends */}
            </div>
          </div>
          {/* Team Member Ends */}
          {/* Team Member Starts */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            {/* Team Member*/}
            <div className="team-member">
              {/* Team Member Picture Starts */}
              <a
                title="Emilia Bella // Sales Manager"
                href="http://via.placeholder.com/480x600"
                data-gal="magnific-pop-up[team]"
                className="team-member-img-wrap"
              >
                <Image src="http://via.placeholder.com/480x600" alt="" />
              </a>
              {/* Team Member Picture Ends */}
              {/* Team Member Details Starts */}
              <div className="team-member-caption social-icons">
                <h4>Emilia Bella</h4>
                <p>Sales Manager</p>
                <ul className="list list-inline social">
                  <li>
                    <a href="#" className="fa fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-google-plus"></a>
                  </li>
                </ul>
              </div>
              {/* Team Member Details Ends */}
            </div>
          </div>
          {/* Team Member Ends */}
          {/* Team Member Starts */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-member">
              {/* Team Member Picture Starts */}
              <a
                title="Antonio Conte // Director"
                href="http://via.placeholder.com/480x600"
                data-gal="magnific-pop-up[team]"
                className="team-member-img-wrap"
              >
                <Image
                  src="http://via.placeholder.com/480x600"
                  alt="team member"
                />
              </a>
              {/* Team Member Picture Ends */}
              {/* Team Member Details Starts */}
              <div className="team-member-caption social-icons">
                <h4>Antonio Conte</h4>
                <p>Director</p>
                <ul className="list list-inline social">
                  <li>
                    <a href="#" className="fa fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-google-plus"></a>
                  </li>
                </ul>
              </div>
              {/* Team Member Details Ends */}
            </div>
          </div>
          {/* Team Member Ends */}
        </div>
        {/* Team Members Ends */}
      </div>
      {/* Container Ends */}
    </section>
  );
};

export default Team;

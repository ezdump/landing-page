import React from "react";
import imgAppStore from "../../assets/img/app-store.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer text-center">
      {/* Container Starts */}
      <div className="container col-md-6 col-sm-12 info">
        {/* Copyright Text Starts */}
        <p>EZ DUMP TRUCK INC.</p>
        <p>
          <span className="text-accent">(919)501-3361</span> or{" "}
          <span className="text-accent">(919) 946-8860</span>
        </p>
        <p>
          {" "}
          <a href="mailto:support@ezdumptruck.com">
            support@ezdumptruck.com
          </a>{" "}
        </p>
        <p>Raleigh NC</p>
        <p>
          &copy; Copyright 2022 <br />
          ezdumpttruck inc by ezdumprtuck team
        </p>
        {/* Copyright Text Ends */}
        {/* Social Media Links Starts */}
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
                rel="noreferrer nofollow"
              ></a>
            </li>
          </ul>
        </div>
        {/* Social Media Links Ends */}
      </div>
      <div className="container col-md-6 col-sm-12 apps">
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/ez-drivers/id1537247152#?platform=iphone"
          rel="noreferrer nofollow"
        >
          <div className="appstore-wrapper">
            <Image
              alt="Download on App Store"
              src={imgAppStore}
              className="appstore-button"
            />
          </div>
        </a>
        <a
          className="mb-3"
          target="_blank"
          rel="noreferrer nofollow"
          href="https://play.google.com/store/apps/details?id=uy.spacedev.ezdumpdrivers&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        >
          <div className="google-play-wrapper">
            <Image
              className="google-play-button"
              alt="Get it on Google Play"
              loader={() =>
                "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              }
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              layout="fill"
            />
          </div>
        </a>
      </div>
      {/* Container Ends */}
    </footer>
  );
};

export default Footer;

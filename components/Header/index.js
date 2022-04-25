import React from "react";
import logo from "../../assets/img/logo.png";
import Image from "next/image";
const Header = () => {
  const showLogin = () => {
    window.open("http://admin.ezdumptruck.com/login", "_blank");
  };
  return (
    <header id="header" className="header">
      <div className="header-inner">
        {/* Navbar Starts */}
        <nav className="navbar navbar-expand-lg p-0" id="singlepage-nav">
          {/* Logo Starts */}
          <div className="logo">
            <a
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              className="navbar-brand link-menu scroll-to-target"
              href="#mainslider"
            >
              <div
                style={{
                  height: "2em",
                  objectFit: "contain",
                }}
                id="logo-light"
                className="logo-light"
              >
                <Image src={logo} alt="logo-light" />
              </div>
              <div
                id="logo-dark"
                className="logo-dark"
                style={{
                  height: "1.5em",
                  objectFit: "contain",
                }}
              >
                <Image src={logo} alt="logo-dark" />
              </div>
            </a>
          </div>
          <button
            className="navbar-toggler p-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span id="icon-toggler">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <div
            className="collapse navbar-collapse nav-menu"
            id="navbarSupportedContent"
          >
            <ul className="nav-menu-inner ml-auto">
              <li>
                <a
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="link-menu"
                  href="#mainslider"
                >
                  <i className="fa fa-home"></i> Home
                </a>
              </li>
              <li>
                <a
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="link-menu"
                  href="#about"
                >
                  <i className="fa fa-user"></i> About us
                </a>
              </li>
              <li>
                <a
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="link-menu"
                  href="#features"
                >
                  <i className="fa fa-cog"></i> Features
                </a>
              </li>
              <li>
                <a
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="link-menu"
                  href="#contact"
                >
                  <i className="fa fa-envelope"></i> Contact Us
                </a>
              </li>
              <li>
                <button
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="link-menu"
                  onClick={showLogin}
                >
                  Sign Up Free
                </button>
              </li>
              <li>
                <button
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="link-menu"
                  onClick={showLogin}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

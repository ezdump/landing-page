import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import Image from "next/image";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const showLogin = () => {
    window.open("http://admin.ezdumptruck.com/login", "_blank");
  };

  const handleScroll = () => {
    const pos = window.scrollY || window.pageYOffset;
    if (pos > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("isnavopen", isNavOpen);
  }, [isNavOpen]);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isScrolled ? "#000" : "transparent",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className="header-inner">
        {/* Navbar Starts */}
        <nav className="navbar navbar-expand-lg p-0">
          {/* Logo Starts */}
          <div className="logo">
            <a className="navbar-brand link-menu scroll-to-target" href="#main">
              <div className="logo-light">
                <div className="image-wrapper">
                  <Image
                    src={logo}
                    alt="logo-light"
                    layout="fill"
                    objectFit="content"
                  />
                </div>
              </div>
            </a>
          </div>
          <button
            className="navbar-toggler p-0"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span
              id="icon-toggler"
              className={`${isNavOpen ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <div
            className="collapse navbar-collapse nav-menu"
            style={{
              height: isNavOpen ? "324px" : "0",
              display: "block",
              transition: "height 0.3s ease-in-out",
            }}
          >
            <ul className="nav-menu-inner ml-auto">
              <li>
                <a
                  className="link-menu"
                  href="#main"
                  onClick={() => setIsNavOpen(false)}
                >
                  <i className="fa fa-home"></i> Home
                </a>
              </li>
              <li>
                <a
                  className="link-menu"
                  href="#about"
                  onClick={() => setIsNavOpen(false)}
                >
                  <i className="fa fa-user"></i> About us
                </a>
              </li>
              <li>
                <a
                  className="link-menu"
                  href="#features"
                  onClick={() => setIsNavOpen(false)}
                >
                  <i className="fa fa-cog"></i> Features
                </a>
              </li>
              <li>
                <a
                  className="link-menu"
                  href="#contact"
                  onClick={() => setIsNavOpen(false)}
                >
                  <i className="fa fa-envelope"></i> Contact Us
                </a>
              </li>
              <li>
                <button className="link-menu" onClick={showLogin}>
                  Sign Up Free
                </button>
              </li>
              <li>
                <button className="link-menu" onClick={showLogin}>
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

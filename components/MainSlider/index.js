import React, { useEffect } from "react";
import imgDesktopView from "../../assets/img/mainSlider/desktop_capture.jpg";
import imgDesktop from "../../assets/img/mainSlider/desktop.png";
import imgMobileView from "../../assets/img/mainSlider/mobile-view.png";
import imgMobile from "../../assets/img/mainSlider/mobile.png";
import sliderBackground from "../../assets/img/slider-background.jpg";
import imgTabletView from "../../assets/img/mainSlider/tablet_view.png";
import imgTablet from "../../assets/img/mainSlider/tablet.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setBannerLoaded } from "../../store/actions";

const MainSlider = () => {
  const dispatch = useDispatch();
  const { isBannerLoaded } = useSelector((state) => state.banner);
  const { device } = useSelector((state) => state.device);
  const [titlePos, setTitlePos] = React.useState(-100);
  const [subtitlePos, setSubtitlePos] = React.useState(-100);
  const [paragraphPos, setParagraphPos] = React.useState(-100);
  const [buttonPos, setButtonPos] = React.useState(-100);

  const [mobilePos, setMobilePos] = React.useState(-100);
  const [tabletPos, setTabletPos] = React.useState(-100);
  const [desktopPos, setDesktopPos] = React.useState(-100);

  useEffect(() => {
    if (isBannerLoaded) {
      setTimeout(() => {
        handleTextsAnimation();
      }, 1000);
      setTimeout(() => {
        handleImagesAnimation();
      }, 1500);
    }
    // eslint-disable next-line react-hooks/exhaustive-deps
  }, [isBannerLoaded]);

  const handleTextsAnimation = () => {
    setTimeout(() => {
      setTitlePos(device === "mobile" ? 5 : 2);
    }, 1000);
    setTimeout(() => {
      setSubtitlePos(device === "mobile" ? 5 : 2);
    }, 1200);
    setTimeout(() => {
      setParagraphPos(device === "mobile" ? 5 : 2);
    }, 1400);
    setTimeout(() => {
      setButtonPos(device === "mobile" ? 5 : 2);
    }, 1600);
  };

  const handleImagesAnimation = () => {
    setTimeout(() => {
      setDesktopPos(-20);
    }, 1000);
    setTimeout(() => {
      setTabletPos(device === "mobile" ? 20 : 15);
    }, 1200);
    setTimeout(() => {
      setMobilePos(device === "mobile" ? 55 : 34);
    }, 1400);
  };
  return (
    <section className="mainslider" id="main">
      <div className="background">
        <Image
          src={sliderBackground}
          className="background-image"
          layout="fill"
          objectFit="cover"
          alt="Background Image Dump Trucks"
          onLoadingComplete={() => dispatch(setBannerLoaded())}
        />
      </div>

      <div
        className="title on"
        style={{
          display: "block",
          whiteSpace: "nowrap",
          left: titlePos + "%",
        }}
      >
        <span className="we_are_title">WE ARE</span>
        <br />{" "}
        <h1>
          <span className="ez_dump_truck_title">EZ DUMP TRUCK</span>
        </h1>
      </div>

      <div
        className="subtitle on"
        style={{
          display: "block",
          whiteSpace: "nowrap",
          letterSpacing: "2px",
          fontWeight: "500",
          left: subtitlePos + "%",
        }}
      >
        <span
          style={{
            marginTop: ".5em !important",
            fontSize: "2em",
            lineHeight: "1em",
            textShadow: "1px 1px 2px rgba(0, 0, 0, .7)",
            color: "#fff",
          }}
        >
          Dump Truck Business <br />
          Just Got Easier!
        </span>
      </div>

      <div
        className="paragraph on"
        style={{
          left: paragraphPos + "%",
        }}
      >
        <p>
          We can help you with scheduling, communications, invoicing and
          customer leads, and start scaling your business now!
        </p>
      </div>

      <div
        className="button on"
        style={{
          left: buttonPos + "%",
        }}
      >
        <a
          target="_blank"
          href="http://admin.ezdumptruck.com/login"
          className="custom-button slider-button scroll-to-target"
          rel="noreferrer"
        >
          SIGN UP FREE
        </a>
      </div>

      <div
        className="desktop off"
        style={{
          right: desktopPos + "%",
        }}
      >
        <div className="device">
          <Image src={imgDesktop} alt="MacBook" />
          <div className="view">
            <Image
              src={imgDesktopView}
              alt="Our desktop administration portal"
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div
        className="tablet off"
        style={{
          right: tabletPos + "%",
        }}
      >
        <div className="device">
          <Image src={imgTablet} alt="A tablet" />
          <div className="view">
            <Image
              src={imgTabletView}
              alt="A tablet view of our administration portal"
            />
          </div>
        </div>
      </div>

      <div
        className="mobile off"
        style={{
          right: mobilePos + "%",
        }}
      >
        <div className="device">
          <Image src={imgMobile} alt="A mobile device" />
        </div>
        <div className="view">
          <Image
            src={imgMobileView}
            alt="Our mobile application, available on PlayStore and AppStore"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSlider;

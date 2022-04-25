import React from "react";
import imgDesktopView from "../../assets/img/mainSlider/desktop_capture.jpg";
import imgDesktop from "../../assets/img/mainSlider/desktop.png";
import imgMobileView from "../../assets/img/mainSlider/mobile-view.png";
import imgMobile from "../../assets/img/mainSlider/mobile.png";
import sliderBackground from "../../assets/img/slider-background.jpg";
import imgTabletView from "../../assets/img/mainSlider/tablet_view.png";
import imgTablet from "../../assets/img/mainSlider/tablet.png";
import Image from "next/image";

const MainSlider = () => {
  return (
    <section className="mainslider" id="mainslider">
      <div className="section">
        <div className="background">
          <Image src={sliderBackground} />
        </div>
        <div className="animatable">
          <div className="title">
            <h2>WE ARE</h2>
            <h1>EZ DUMP TRUCK</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;

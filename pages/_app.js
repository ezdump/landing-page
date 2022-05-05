import React, { useEffect, useState } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/rtl.css";
import "../assets/css/skins/goldenrod.css";
import "../assets/css/style.css";
import "../assets/css/main-slider.css";
import "../assets/css/header.css";
import "../assets/js/plugins/revolution/css/layers.css";
import "../assets/js/plugins/revolution/css/navigation.css";
import "../assets/js/plugins/revolution/css/settings.css";

import AboutUs from "../components/AboutUs";
import BackToTop from "../components/BackToTop";
import ContactForm from "../components/ContactForm";
import CustomHead from "../components/CustomHead";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FrequentQuestions from "../components/FrequentQuestions";
import Header from "../components/Header";
import Intercom from "../components/Intercom";
import Loader from "../components/Loader";
import MainSlider from "../components/MainSlider";
import Video from "../components/Video";
import WhyUs from "../components/WhyUs";
import "./index.css";
import { wrapper } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setDevice } from "../store/actions";

function MyApp({ Component, pageProps }) {
  const { isBannerLoaded } = useSelector((state) => state.banner);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const handleResize = () => {
    const width = window.innerWidth;
    if (width > 1199) dispatch(setDevice("desktop"));
    else if (width > 767) dispatch(setDevice("tablet"));
    else dispatch(setDevice("mobile"));
  };

  useEffect(() => {
    addEventListener("resize", handleResize);
    handleResize();
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isBannerLoaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isBannerLoaded]);

  return (
    <React.Fragment>
      <CustomHead />
      <Loader />
      {/* Page Wrapper Starts */}
      <div
        className="wrapper"
        style={{
          height: !isLoading ? "auto" : "100vh",
          overflow: "hidden",
        }}
      >
        <Intercom />
        <Header />
        <MainSlider />
        <AboutUs />
        <WhyUs />
        <Features />
        {/* <Testimonials /> */}
        {/* <Portfolio /> */}
        {/* <Facts /> */}
        {/* <Team /> */}
        {/* <Newsletter /> */}
        {/* <Blog /> */}
        <Video />
        {/* <Contact /> */}
        <ContactForm />
        <FrequentQuestions />
        {/* <Logos /> */}
        <Footer />
        <BackToTop />
      </div>
    </React.Fragment>
  );
}

/** Angel Martinez
 *  Rafaela, Santa Fe, Argentina
 *  amartinez.web.app
 */

export default wrapper.withRedux(MyApp);

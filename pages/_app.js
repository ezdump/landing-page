import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/rtl.css";
import "../assets/css/skins/goldenrod.css";
import "../assets/css/style.css";
import "../assets/js/plugins/revolution/css/layers.css";
import "../assets/js/plugins/revolution/css/navigation.css";
import "../assets/js/plugins/revolution/css/settings.css";
import AboutUs from "../components/AboutUs";
import BackToTop from "../components/BackToTop";
import ContactForm from "../components/ContactForm";
import CustomHead from "../components/CustomHead";
import CustomScripts from "../components/CustomScripts";
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

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <CustomHead />
      <Loader />
      {/* Page Wrapper Starts */}
      <div className="wrapper">
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

export default MyApp;

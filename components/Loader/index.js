import React, { useEffect } from "react";
import logo from "../../assets/img/logo.png";
import Image from "next/image";
import { useSelector } from "react-redux";

const Loader = () => {
  const { isBannerLoaded } = useSelector((state) => state.banner);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (isBannerLoaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isBannerLoaded]);

  const onBackgrounLoaded = () => {
    console.log("background loaded");
  };

  return (
    <div
      className="loader-wrapper"
      style={{
        top: isLoading ? "0" : "-100vh",
      }}
    >
      <div
        className="loader-container"
        style={{
          width: "10em",
        }}
      >
        <Image src={logo} alt="logo-white" />
        <div className="loader-spin"></div>
      </div>
    </div>
  );
};

export default Loader;

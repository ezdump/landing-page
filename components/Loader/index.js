import React from "react";
import logo from "../../assets/img/logo.png";
import Image from "next/image";
const Loader = () => {
  return (
    <div className="preloader" id="preloader">
      <div className="logopreloader">
        <Image src={logo} alt="logo-white" style={{
            width: "10em"
        }} />
      </div>
      <div className="loader" id="loader"></div>
    </div>
  );
};

export default Loader;

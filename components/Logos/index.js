import React from "react";
import Image from "next/image";
const Logos = () => {
  return (
    <section className="logos">
      <div className="container">
        <ul className="bxslider" id="bxslider">
          {/* Logos Items Starts */}
          <li>
            <Image src="http://via.placeholder.com/150x29" alt="" />
          </li>
          <li>
            <Image src="http://via.placeholder.com/150x29" alt="" />
          </li>
          <li>
            <Image src="http://via.placeholder.com/150x29" alt="" />
          </li>
          <li>
            <Image src="http://via.placeholder.com/150x29" alt="" />
          </li>
          <li>
            <Image src="http://via.placeholder.com/150x29" alt="" />
          </li>
          <li>
            <Image src="http://via.placeholder.com/150x29" alt="" />
          </li>
          <li>
            <Image src="http://via.placeholder.com/150x29" alt="" />
          </li>
          <li>
            <Image src="http://via.placeholder.com/150x29" alt="" />
          </li>
          {/* Logos Items Ends */}
        </ul>
      </div>
    </section>
  );
};

export default Logos;

import React from "react";
import IntercomIcon from "../../assets/img/intercom-icon.png";
import Image from "next/image";

const Intercom = () => {
  return (
    <>
      {/* {isOpen ? ( */}
      <span title="Send us a message">
        <button id="chat-intercom" className="intercom-button">
          <div>
            <Image src={IntercomIcon} alt={"show-help-center"} />
          </div>
        </button>
      </span>
    </>
  );
};

export default Intercom;

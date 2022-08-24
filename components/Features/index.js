import React, { useEffect, useState } from "react";
import imgBill from "../../assets/img/features/Bill.svg";
import imgDeliveryLocation from "../../assets/img/features/Delivery Location.svg";
import imgPayment from "../../assets/img/features/Payment.svg";
import imgNotification from "../../assets/img/features/Notification.png";
import imgChat from "../../assets/img/features/Chat.png";
import imgRevenue from "../../assets/img/features/Revenue.png";
import imgDashboard from "../../assets/img/features/Dashboard.png";
import imgGesture1 from "../../assets/img/features/Gesture-1.svg";
import imgCallCenter from "../../assets/img/features/Call Center.png";
import imgBanking from "../../assets/img/features/M-Banking.png";
import imgManDriver from "../../assets/img/features/Man Driver.png";
import imgRealTimeData from "../../assets/img/features/Real Time Data.png";
import Image from "next/image";

const ourFeatures = [
  {
    title: "Paperless tickets",
    description:
      "100% digital to stay organized and accessible all the time. Eliminate human error and never lose a load ticket.",
    img: imgBill,
  },
  {
    title: "Asset Location",
    description:
      "Real-time trucks location, loads count and total tons. Giving you more control and peace of mind.",
    img: imgDeliveryLocation,
  },
  {
    title: "Quick Payment",
    description:
      "Because we know all the effort and Hard work you put for your money. We offer next day Payment to our dump trucks companies*** .",
    img: imgRevenue,
  },

  {
    title: "Personalized Notifications",
    description:
      "Act Quickly to Advance Your Operation’s Effectiveness. Managing a single or multiple trucks can be unrelenting! A text, push or email communication solution is a quick fix to your management woes…",
    img: imgNotification,
  },
  {
    title: "In-app Communication",
    description:
      "Quickly, conveniently and efficiently connect with the right person at the moment you need.",
    img: imgChat,
  },
  {
    title: "Hassle-Free Booking",
    description:
      "Dispatch at your fingertips. Find hundreds of dump trucks and find tons job available in your area",
    img: imgPayment,
  },
  {
    title: "Personalized Dashboard",
    description:
      "Powerful cash and assets flow insights, track trucks, drivers, loads, jobs status, cash flows and connect with leads in your area. - ALL IN ONE PLACE :)",
    img: imgDashboard,
  },
  {
    title: "One Click Away",
    description:
      "Implementing the best practices for processing transactions and access your data. Making the dump truck business more easier than ever..",
    img: imgGesture1,
  },
  {
    title: "24/7 Customer Service",
    description:
      "Our Culture is serving the people that are part of our success. we offer creatively problem-solve, rapid answer and personalize services.",
    img: imgCallCenter,
  },
  {
    title: "Owners Mobile APP",
    description:
      "Helping the owners to reduce cost and getting the most free time and pace of mind.",
    img: imgBanking,
  },
  {
    title: "Drivers Mobile App",
    description:
      "Helping the driver increase productivity by letting focus in what he knows the most.",
    img: imgManDriver,
  },
  {
    title: "Real Time Data",
    description:
      "Get current status of your loads, tons and hours in real time for better management of your job sites.",
    img: imgRealTimeData,
  },
];

const Features = () => {
  const [shownFeatures, setShownFeatures] = useState(3);
  const [totalFeatures, setTotalFeatures] = useState(ourFeatures.length);

  const handleClick = () => {
    if (shownFeatures < totalFeatures) {
      setShownFeatures(totalFeatures);
    } else {
      setShownFeatures(3);
    }
  };

  useEffect(() => {
    setTotalFeatures(ourFeatures.length);
  }, []);

  return (
    <section id="features" className="services">
      {/* Container Starts */}
      <div className="container">
        {/* Main Heading Starts */}
        <div className="text-center top-text">
          <h2 className="section-title">
            <span>Our</span> Features
          </h2>
          <span>
            EZ DUMP TRUCK is helping owners and contractors to get in control{" "}
            <br />
            with personalized features so they can reach their goals.
          </span>
        </div>
        {/* Main Heading Starts */}
        {/* Divider Starts */}
        <div className="divider text-center">
          <span className="outer-line"></span>
          <span className="fa fa-cogs" aria-hidden="true"></span>
          <span className="outer-line"></span>
        </div>
        {/* Divider Ends */}
        {/* Services Starts */}
        <div className="row services-box">
          {/* Service Item Starts */}
          {ourFeatures.map((item, i) => {
            if (i < shownFeatures) {
              return (
                <div
                  className="col-lg-4 col-md-12 col-sm-12 services-box-item"
                  key={"feature-n-" + i}
                >
                  {/* Service Item Cover Starts */}
                  <span
                    className="services-box-item-cover"
                    //data-headline={item.title}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "10em",
                        objectFit: "contain",
                        position: "absolute",
                        color: "white",
                        top: "8px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Image alt={item.title} src={item.img} />
                    </div>
                    <br />
                    <span
                      style={{
                        position: "absolute",
                        top: "80%",
                        width: "100%",
                        textAlign: "center",
                        left: 0,
                      }}
                      className="feature_title"
                    >
                      {item.title}
                    </span>
                  </span>
                  {/* Service Item Cover Ends */}
                  {/* Service Item Content Starts */}
                  <div className="services-box-item-content">
                    <div
                      style={{
                        width: "12em",
                        position: "absolute",
                        top: "-2em",
                        right: "-2em",
                        opacity: "0.2",
                      }}
                    >
                      <Image src={item.img} alt={item.title + " Ez easy Dump Truck"} />
                    </div>
                    <br />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  {/* Service Item Content Ends */}
                </div>
              );
            } else {
              return <div key={"non-feature-n-" + i}></div>;
            }
          })}
          <button
            className={
              "custom-button slider-button scroll-to-target" +
              (shownFeatures < totalFeatures ? "" : " to-exit")
            }
            onClick={handleClick}
            style={{
              margin: "0 auto",
            }}
          >
            {shownFeatures < totalFeatures ? "Show More" : "Show Less"}
          </button>
          {/* Service Item Ends */}
        </div>
        {/* Services Ends */}
      </div>
    </section>
  );
};

export default Features;

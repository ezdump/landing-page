import React, { useEffect } from "react";
import { useState } from "react";
import { apiBaseUrl } from "../../config";
import Script from "next/script";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [noName, setNoName] = useState(false);
  const [email, setEmail] = useState("");
  const [noEmail, setNoEmail] = useState(false);
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [noMessage, setNoMessage] = useState(false);
  const [company, setCompany] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [isError, setIsError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const closeDelay = () => {
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    if (!name || name === "") setNoName(true);
    if (!email || email === "") setNoEmail(true);
    if (!message || message === "") setNoMessage(true);
    
    if (name.length && email.length && message.length) {
      setIsButtonDisabled(true);
      fetch("/api/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          company: company,
          email: email,
          message: message,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            setName("");
            setEmail("");
            setCity("");
            setMessage("");
            setCompany("");
            setAlertContent("Message sent successfully");
            setIsError(false);
            setAlertVisible(true);
            closeDelay();
          }
          setIsButtonDisabled(false);
        })
        .catch((err) => {
          setAlertContent("Error sending message");
          setIsError(true);
          setAlertVisible(true);
          closeDelay();
          setIsButtonDisabled(false);
        });
    }
  };

  useEffect(() => {
    if (name && name !== "") setNoName(false);
    if (email && email !== "") setNoEmail(false);
    if (message && message !== "") setNoMessage(false);
  }, [name, email, message]);

  return (
    <section id="contact" className="contactform">
      <div className="section-overlay">
        <div className="container">
          {/* Main Heading Starts */}
          <div className="text-center top-text">
            <h2 className="section-title">
              <span>Any </span>doubts?
            </h2>
            <div>
              <p className="text-center">
                We understand that Dump Truck business can get complicated.
              </p>
              <p className="text-center">
                Get in touch with us and we will show how to reach your
                potential with EZ DUMP TRUCK
              </p>
            </div>
          </div>
          {/* Main Heading Ends */}
          <div className="form-container">
            {/* Contact Form Starts */}
            <form className="formcontact">
              <div className="row form-inputs">
                {/* Name Field Starts */}
                <div className="col-md-6 form-group custom-form-group">
                  <span
                    className={`input custom-input ${
                      noName ? "has-error" : ""
                    }`}
                  >
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="input-field custom-input-field"
                      id="name"
                      name="name"
                      type="text"
                      required
                      data-error="NEW ERROR MESSAGE"
                    />
                    <label className="input-label custom-input-label">
                      <i className="fa fa-user icon icon-field"></i>
                    </label>
                  </span>
                </div>
                {/* Name Field Ends */}
                {/* Company Name Field Starts */}
                <div className="col-md-6 form-group custom-form-group">
                  <span className="input custom-input">
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company Name"
                      className="input-field custom-input-field"
                      id="company"
                      name="company"
                      type="text"
                    />
                    <label className="input-label custom-input-label">
                      <i className="fa fa-building icon icon-field"></i>
                    </label>
                  </span>
                </div>
                {/* Company Name Field Ends */}
                <div className="col-md-6 form-group custom-form-group">
                  <span className="input custom-input">
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                      className="input-field custom-input-field"
                      id="city"
                      name="city"
                      type="text"
                    />
                    <label className="input-label custom-input-label">
                      <i className="fa fa-map icon icon-field"></i>
                    </label>
                  </span>
                </div>
                {/* Email Name Field Starts */}
                <div className="col-md-6 form-group custom-form-group">
                  <span
                    className={`input custom-input ${
                      noEmail ? "has-error" : ""
                    }`}
                  >
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="input-field custom-input-field"
                      id="email"
                      name="email"
                      type="text"
                      required
                      data-error="NEW ERROR MESSAGE"
                    />
                    <label className="input-label custom-input-label">
                      <i className="fa fa-envelope icon icon-field"></i>
                    </label>
                  </span>
                </div>
                {/* Email Name Field Ends */}
                {/* Message Field Starts */}
                <div className="form-group custom-form-group col-md-12">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    id="message"
                    name="message"
                    cols={45}
                    rows={7}
                    required
                    className={noMessage ? "has-error" : ""}
                  ></textarea>
                </div>
                {/* Message Field Ends */}

                {/* Submit Button Starts */}
                <div className="col-md-6 submit-form mx-auto">
                  <button
                    onClick={sendMessage}
                    className={`custom-button custom-button-contact ${
                      isButtonDisabled ? "is-disabled" : ""
                    }`}
                    title="Send"
                    disabled={isButtonDisabled}
                  >
                    Send Message
                  </button>
                </div>
                {/* Submit Button Ends */}
              </div>
            </form>
            {/* Contact Form Ends */}
            {/* Alert */}
            <div
              style={{
                position: "fixed",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: "9999",
                width: "50%",
              }}
              className={`alert ${
                isError ? "alert-danger" : "alert-success"
              } alert-dismissible fade ${alertVisible ? "show" : ""}`}
              role="alert"
            >
              {alertContent}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* Alert Ends */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

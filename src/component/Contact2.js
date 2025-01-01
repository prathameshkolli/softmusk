import React from "react";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";
import "./Contact2.css";

const Contact = () => {
  return (
    <section className="c-contact">
      <div className="c-container">
        <div className="row">
          <div className="column">
            <div className="icon-item">
              <FiMapPin className="contact-icon address-icon" />
              <div className="text">
                <h5>Our Address</h5>
                <p>
                  CTS No- 1049/A2, No-86/2, Floor, FS Plaza, Near Mahaveer
                  Bhavan, Khanapur Rd Tilakwadi, Belgaum, Karnataka 590006
                </p>
              </div>
            </div>

            <div className="icon-item">
              <FiPhoneCall className="contact-icon" />
              <div className="text">
                <h5>Phone Number</h5>
                <p>+91 8971020906 / +91 9591211023</p>
              </div>
            </div>

            <div className="icon-item">
              <FiMail className="contact-icon" />
              <div className="text">
                <h5>Email Us</h5>
                <p>service@softmusk.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="contact-form">
              <form action="#">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit" className="site-btn">
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="map-column">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.352363786958!2d74.5056413147749!3d15.838067189024114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf6683e6e312b9%3A0x662484b3730853d2!2sSoftmusk%20Info%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1671584924694!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

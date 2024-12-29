import React from "react";
import { FaQuestionCircle, FaHeadset, FaLifeRing } from "react-icons/fa";
import "./Support.css";

const SupportUpper = () => {
  return (
    <>
      <div className="Shome">
        <div className="support-heading-overlay">
          <h1><strong>Support</strong></h1>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <FaQuestionCircle className="card-icon" />
              <h3>FAQ's</h3>
              <p>
                Explore detailed answers to common questions about our platform
              </p>
              <a href="#faq-section" className="action-button">
                Explore FAQs
              </a>
              <a href="#" className="download-button">
                Download FAQs
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <FaHeadset className="card-icon" />
              <h3>Contact Us</h3>
              <p>
                We're here to help. Reach out for personalized support or to address
                your queries efficiently.
              </p>
              <a href="#" className="action-button">
                Start Chat
              </a>
              <a href="#" className="download-button">
                Download Contact Info
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <FaLifeRing className="card-icon" />
              <h3>Technical Support</h3>
              <p>
                Our technical team is ready to assist with any complex issues you
                might encounter.
              </p>
              <a href="#" className="action-button">
                Get Support
              </a>
              <a href="#" className="download-button">
                Download Support Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportUpper;

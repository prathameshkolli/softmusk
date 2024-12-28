import React from "react";
import "./Support.css";
const SupportUpper = () => {
  return (
    <>
      <div className="Shome"></div>
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>01</h2>
              <h3>Card One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <a
                href="/path-to-your-file/sample.pdf" // Replace with your file's path
                download="sample.pdf" // The file name for the downloaded file
                className="download-button"
              >
                Download File
              </a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>02</h2>
              <h3>Card Two</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <a
                href="/path-to-your-file/sample.pdf" // Replace with your file's path
                download="sample.pdf" // The file name for the downloaded file
                className="download-button"
              >
                Download File
              </a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>03</h2>
              <h3>Card Three</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <a
                href="/path-to-your-file/sample.pdf" // Replace with your file's path
                download="sample.pdf" // The file name for the downloaded file
                className="download-button"
              >
                Download File
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportUpper;

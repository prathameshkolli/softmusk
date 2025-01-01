import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Auto.css";
import logo7 from "../images/logo/logo7.png";
import logo2 from "../images/logo/logo2.png";
import logo3 from "../images/logo/logo33.jpg";
import logo4 from "../images/logo/logo44.jpg";
import logo5 from "../images/logo/logo5.png";
import logo6 from "../images/logo/logo6-removebg-preview.png";
import logo1 from "../images/logo/logo1.png";

class Auto extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: window.innerWidth > 940 ? 3 : 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "ease-in-out",
      responsive: [
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="mainContainer">
        <h2 className="h2">Our Clients</h2>
        <h6 className="bss__our">_</h6>
        <Slider {...settings}>
          <div className="container">
            <img src={logo1} alt="Logo 1" />
          </div>
          <div className="container">
            <img src={logo2} alt="Logo 2" />
          </div>
          <div className="container">
            <img src={logo7} alt="Logo 7" />
          </div>
          <div className="container">
            <img src={logo4} alt="Logo 4" />
          </div>
          <div className="container">
            <img src={logo3} alt="Logo 3" />
          </div>
          <div className="container">
            <img src={logo5} alt="Logo 5" />
          </div>
          <div className="container">
            <img src={logo6} alt="Logo 6" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Auto;

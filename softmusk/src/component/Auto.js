import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Auto.css";
import logo7 from '../images/logo/logo7.png'
import logo2 from '../images/logo/logo2.png'
import logo3 from '../images/logo/logo33.jpg'
import logo4 from '../images/logo/logo44.jpg'
import logo5 from '../images/logo/logo5.png'
import logo6 from '../images/logo/logo6-removebg-preview.png'
import logo1 from '../images/logo/logo1.png'


class Auto extends Component{
  render(){
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return(
      <div className="mainContainer">
        <h2 className="h2">Our Clients</h2>
        <h6 className='bss__our'>_</h6>
        <Slider {...settings}>
          <div className="container">
            <img src={logo1} alt='' />
          </div>
          <div className="container">
          <img src={logo2} alt='' />
            
          </div>
          <div className="container">
          <img src={logo7} alt='' />
            
          </div>
          <div className="container">
          <img src={logo4} alt='' />
            
          </div>
          <div className="container">
          <img src={logo3} alt='' />
            
          </div>
          <div className="container">
          <img src={logo5} alt='' />
            
          </div>
          <div className="container">
          <img src={logo6} alt='' />
            
          </div>
        </Slider>
      </div>
    );
  }
}

export default Auto;
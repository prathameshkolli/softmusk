import React from "react";
import './ClientSays.css';
import Slider from "react-slick";

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const data = [
  {
    name: 'CEO',
    mname: 'M/s S G INDUSTRIES',
    review: 'Best design & development for industrial level websites and services. Nice team work and support. Thanks, Softmusk & Team.'
  },
  {
    name: 'Director',
    mname: 'Kirti Surgicals',
    review: 'Good web & software services for business solutions.'
  },
  {
    name: 'Principal',
    mname: 'KV NO.3 BELGAUM',
    review: 'Good place for internships and academic projects.'
  },
  {
    name: 'Engineering Student',
    mname: 'SNEHAL KHOT',
    review: 'Best understandings, supportive and helpful team. "I gained a new sense of professionalism and a clearer view of what it meant to be in the professional world. I would advise everyone to take the opportunity and do an internship in Softmusk.'
  },
  {
    name: 'Topovan Of Shri Kumarswamiji',
    mname: 'Dharwad',
    review: 'Nice work and totally satisfied. Softmusk Info Private Ltd. provides good work. Thank you team and company.'
  },
];

const ClientSays = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="slide">
            <div className="review-container">
              <p className="review-text">"{item.review}"</p>
            </div>
            <h3 className="name">{item.name}</h3>
            <p className="mname">{item.mname}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSays;

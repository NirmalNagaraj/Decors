import React from "react";
import Slider from "react-slick";
import bg2 from '../assets/HomeC2.png';
import bg3 from '../assets/HomeC1.png';
import bg4 from '../assets/HomeC3.png';
import bg5 from '../assets/HomeC4.png';


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={bg2} alt="carousel" className="w-full h-48 md:h-[450px]"/>
      </div>
      <div>
        <img src={bg3} alt="carousel" className="w-full h-48 md:h-[450px]"/>
      </div>
      <div>
        <img src={bg4} alt="carousel" className="w-full h-48 md:h-[450px]"/>
      </div>
      <div>
        <img src={bg5} alt="carousel" className="w-full h-48 md:h-[450px]"/>
      </div>
    </Slider>
  );
}
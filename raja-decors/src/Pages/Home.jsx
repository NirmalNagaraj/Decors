import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from '../assets/Raja_Decors_logo.png';
import bg2 from '../assets/WhatsApp Image 2024-05-08 at 11.44.09_15330b37.jpg';
import bg3 from '../assets/WhatsApp Image 2024-05-08 at 11.44.09_827abe77.jpg';
import bg4 from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_9af52197.jpg';
import bg5 from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_e34a28c8.jpg';
import who from '../assets/whowe.png';
import hall from '../assets/hall.png';
import Cards from '../Components/Cards';
import Services from '../Components/Service';
import Offer from '../Components/Offer';
import Contactus from '../Components/Contactus';

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [bg2, bg3, bg4, bg5];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="relative h-3/4 pt-5 overflow-x-hidden">
      <div>

      <Carousel
        autoPlay={true}
        interval={5000}
        showThumbs={false}
        infiniteLoop={true} 
        stopOnHover={false}
      >
        {backgrounds.map((background, index) => (
          <div key={index}>
            <img src={background} alt={`Background ${index}`} className="w-full h-2/4" />
          </div>
        ))}
      </Carousel>
      <div className='absolute top-0 py-80 flex flex-col justify-center items-center text-white font-semibold text-3xl md:text-6xl md:leading-normal md:px-20'>
        <p className='drop-shadow-2xl shadow-2xl border-gray-400 font-serif'>Welcome to Raja Decors - Where Dreams Blossom into Reality</p>
      </div>
        </div>
        <div className='z-20 pt-5'>
          <Cards />
        </div>
        <div>
          <div>
            <p className='text-3xl text-[#F1518B] font-semibold mx-10 md:mx-32 mt-16 mb-10 '>Who We Are</p>

            <div className='mx-10 md:mx-32 my-2 md:space-x-28 gap-10 md:gap-0 grid md:grid-cols-2 grid-cols-1'>
              <p className='font-serif md:text-6xl text-2xl'>Raja Decors - Where Every Petal Paints Your Perfect Day</p>
              <img src={who} alt="who we are" className=''/>
            </div>
            <div className='mx-10 md:mx-32 my-20 md:space-x-10 gap-10 md:gap-0 grid md:grid-cols-2 grid-cols-1'>
              <img src={hall} alt="hall" />
              <div>
              <p className='font-serif font-extralight md:text-2xl'>From intimate gatherings to grand celebrations, we are dedicated to bringing your unique vision to life. Our passion for floral artistry drives us to create bespoke arrangements that perfectly complement your style, theme, and ambiance, ensuring every detail is a reflection of your personality and taste.</p>
              <button className='border border-[#F1518B] hover:bg-[#F1518B] hover:text-white px-3 py-2 my-5 rounded-3xl font-semibold'>Know More About Us</button>
              </div>
            </div>
          </div>
        <Services />
        <div>
          <Offer />
        </div>
        {/* <div>
          <Contactus />
        </div> */}
        </div>
    </div>
  );
};

export default Home;

import React from 'react'
import servicepng from '../assets/service.png';
import Service1 from '../Components/Services1';

const Services = () => {
  return (
    <div className=''>
      <div className='flex justify-center'>
        <div className='bg-cover bg-center w-screen h-48 md:h-[450px]' style={{backgroundImage: `url(${servicepng})`}}>
          <div className='text-white text-2xl md:text-7xl font-bold py-10 md:py-56 text-center'>
           <p className='border-2 border-white mx-4 md:mx-40 py-8 md:py-8 rounded-2xl heading' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>Raja Decors Service</p>
          </div>
        </div>
      </div>
      <Service1 />
      </div>
  )
}

export default Services;
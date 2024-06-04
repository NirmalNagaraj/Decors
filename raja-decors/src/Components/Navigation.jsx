import React from 'react';
import logo from '../assets/Raja_Decors_logo.png'

const Navigation = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-center'>
            <img className='h-24' src={logo} alt="Raja Decors" />
        </div>
        <div className='list-none flex justify-center gap-2 md:mx-0 mx-2 md:gap-20 text-lg'>
            <a href=''>Home</a>
            <a href=''>About Us</a>
            <a href='/services'>Services</a>
            <a href=''>Gallery</a>
            <a href='/contact'>Contact</a>
        </div>
    </div>
  )
}

export default Navigation
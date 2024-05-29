import React from 'react'
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import logo1 from '../assets/Raja_Decors_logo 1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#1c4355] text-white'>
        <div className='flex items-center justify-center'>
            <img className='h-44 mt-10' src={logo1} alt="Raja Decors"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 px-0 mx-0 md:mx-20 mt-20'>
            <div className='list-none flex flex-col gap-2 justify py-4 pl-28 md:pl-40 md:mx-0 text-3xl poppins-semibold'>
                <Link to='/'>
                    <p>Home</p>
                </Link>
                <Link to='/about'>
                    <p>About Us</p>
                </Link>
                <Link to='/services'>
                    <p>Services</p>
                </Link>
                <Link to='/gallery'>
                    <p>Gallery</p>
                </Link>
                <Link to='/contact'>
                    <p>Contact</p>
                </Link>
            </div>
            <div className='text-center'>
                <div className='text-[#FD8901] ubuntu-bold text-3xl'>Visit us</div>
                <div className='poppins-regular md:text-2xl text-xl py-4 capitalize'>
                    No:11/163 vadakkupattu mainroad, kovilambakkam,<br/>chennai-600129
                </div>
            </div>
            <div className='text-center'>
                <div className='text-[#FD8901] ubuntu-bold text-3xl'>Contact</div>
                <div className='poppins-regular md:text-2xl text-xl py-4'>
                    <p>rajadecorator1980@gmail.com</p>
                    <p>+91 99402 29923</p>
                    <p>+91 98406 01980</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-8 mx-4 md:mx-0'>
            <a href='https://www.facebook.com/profile.php?id=61559479329689&mibextid=LQQJ4d' target='_blank'>
                <img className='h-16 my-8 hover:scale-110 transition duration-300'  src={facebook} alt='facebook'/>
            </a>
            <a href='https://www.instagram.com/rajadecorator?igsh=dWs1eXQzbWMxMmJk' target='_blank' className='bg-white p-2 rounded-full hover:scale-110 transition duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
            </a>
            <a href=''>
                <img className='h-16 my-8 hover:scale-110 transition duration-300'  src={youtube} alt='youtube'/>
            </a>
        </div>
        <div className='poppins-bold capitalize'>
            <p className='md:text-xl text-lg text-center pb-8'>
            ©<span className='text-amber-500'>Raja Decors</span>. all rights reserved
            </p>
        </div>
    </div>
  )

}

export default Footer;
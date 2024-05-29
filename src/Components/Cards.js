import React from 'react';
import exp from '../assets/Experienced.png';
import create from '../assets/Creativity.png';
import attention from '../assets/Attendtion.png';
import proffess from '../assets/professional.png';

const Cards = () => {
  return (
    <div>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-5 md:mx-10 mx-5'>
        <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl flex flex-col items-center bg-blue-100 p-4'>
          <img src={exp} alt='experience' className='mx-auto my-3 w-24' />
          <h1 className='text-2xl font-semibold text-center'>Wedding</h1>
          <p className='mx-4 my-3 text-center'>
            Seamlessly blend tradition and modernity for unforgettable matrimonial celebrations
          </p>
        </div>
        <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl flex flex-col items-center bg-blue-100 p-4'>
          <img src={create} alt='creativity' className='mx-auto my-3 w-24' />
          <h1 className='text-2xl font-semibold text-center'>Entrance Decoration</h1>
          <p className='mx-4 my-3 text-center'>
            Grandeur welcomes, setting the tone for unforgettable experiences at every event entrance
          </p>
        </div>
        <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl flex flex-col items-center bg-blue-100 p-4'>
          <img src={attention} alt='attention' className='mx-auto my-3 w-24' />
          <h1 className='text-2xl font-semibold text-center'>Birthday Decoration</h1>
          <p className='mx-4 my-3 text-center'>
            Whimsical wonders and vibrant hues transform spaces into dreamy realms of celebration
          </p>
        </div>
        <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl flex flex-col items-center bg-blue-100 p-4'>
          <img src={proffess} alt='professional' className='mx-auto my-3 w-24' />
          <h1 className='text-2xl font-semibold text-center'>Corporate Event</h1>
          <p className='mx-4 my-3 text-center'>
            Professional sophistication meets innovative flair, setting the stage for successful engagements
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;

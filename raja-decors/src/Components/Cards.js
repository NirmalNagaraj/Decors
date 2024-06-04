import React from 'react'
import exp from '../assets/Experienced.png';
import create from '../assets/Creativity.png';
import attention from '../assets/Attendtion.png';
import proffess from '../assets/professional.png';

const Cards = () => {
  return (
    <div>
        <div className='md:mx-16 mx-8 space-y-5 md:space-y-0 grid md:grid-cols-4 grid-cols-1'>
            <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl p-4 w-80 bg-white'>
                <img src={exp} alt='experience' className='mx-24 my-3'/>
                <h1 className='text-3xl font-semibold text-center'>Wedding</h1>
                <p className=' mx-4 my-3 text-left'>
                Seamlessly blend tradition and modernity for unforgettable matrimonial celebrations
                </p>
            </div>
            <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl p-4 w-80 bg-white'>
                <img src={create} alt='experience' className='mx-24 my-3'/>
                <h1 className='text-3xl font-semibold text-center'>Entrance Decoration</h1>
                <p className=' mx-4 my-3 text-left'>
                Grandeur welcomes, setting the tone for unforgettable experiences at every event entrance
                </p>
            </div>
            <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl p-4 w-80 bg-white'>
                <img src={attention} alt='experience' className='mx-24 my-3'/>
                <h1 className='text-3xl font-semibold text-center'>Birthday Decoration</h1>
                <p className=' mx-4 my-3 text-left'>
                Whimsical wonders and vibrant hues transform spaces into dreamy realms of celebration
                </p>
            </div>
            <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl p-4 w-80 bg-white'>
                <img src={proffess} alt='experience' className='mx-24 my-3'/>
                <h1 className='text-3xl font-semibold text-center'>Corporate Event</h1>
                <div className='flex justify-center'>
                <p className=' mx-4 my-3 text-left'>
                Professional sophistication meets innovative flair, setting the stage for successful engagements
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
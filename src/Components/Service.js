import React from 'react';
import wbg1 from '../assets/Wedding/IMG_2353.JPG';
import wbg2 from '../assets/Wedding/IMG_2355.JPG';
import wbg3 from '../assets/Wedding/IMG_2356.JPG';
import wbg4 from '../assets/Wedding/IMG_2357.JPG';
import bbg1 from '../assets/birthday/IMG_2418.JPG';
import bbg2 from '../assets/birthday/IMG_2419.JPG';
import bbg3 from '../assets/birthday/IMG_2420.JPG';
import bbg4 from '../assets/birthday/IMG_2421.JPG';
import cbg1 from '../assets/corporate/IMG_2405.JPG';
import cbg2 from '../assets/corporate/IMG_2402.JPG';
import cbg3 from '../assets/corporate/IMG_2403.JPG';
import cbg4 from '../assets/corporate/IMG_2404.JPG';
import ebg1 from '../assets/Entrance/IMG_2392.JPG';
import ebg2 from '../assets/Entrance/IMG_2393.JPG';
import ebg3 from '../assets/Entrance/IMG_2394.JPG';
import ebg4 from '../assets/Entrance/IMG_2395.JPG';
import Carousel from './Carousel';


const Service = () => {

    const onClickButton = () => {
        window.location.href = "/services";
    }
    return (
        <div className='flex justify-evenly items-center'>
            <div>
                <div>
                    <p className='md:text-3xl text-4xl heading text-blue-600 font-semibold text-center my-5 uppercase'>Services</p>
                    <p className='text-center text-[#FD8901] heading md:text-5xl text-2xl'>Services We Bring You</p>
                </div>
                <div className='grid md:grid-cols-4 gap-4 grid-cols-1 md:mx-3 mx-5 my-10'>
                    <div className='w-72 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl p-4 hover:scale-105 transition transform flex flex-col justify-between'>
                        <Carousel bg1={wbg1} bg2={wbg2} bg3={wbg3} bg4={wbg4} styles={'w-full h-48 rounded-md'}/>
                        <div>
                            <p className='text-lg font-serif my-3 font-semibold text-center'>
                                Wedding Decoration
                            </p>
                            <p className='text-sm my-3 font-light text-center'>
                                Wishing your Event held a grand
                                style? We promise to provide the
                                perfect decorations.
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={onClickButton} className='shine-effect hover:scale-110 border border-[#FD8901] bg-[#FFEF99] hover:bg-[#FD8901] hover:text-white px-8 py-2 mt-3 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                    <div className='w-72 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl p-4 hover:scale-105 transition transform flex flex-col justify-between'>
                        <Carousel bg1={bbg1} bg2={bbg2} bg3={bbg3} bg4={bbg4} styles={'w-full h-48 rounded-md'}/>
                        <div>
                            <p className='text-lg font-serif my-3 font-semibold text-center'>
                                Birthday Decoration
                            </p>
                            <p className='text-sm my-3 font-light text-center'>
                                Customized catering for any occasion.
                                We tailor menus to your taste, ensuring every dish reflects
                                your unique style and vision.
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={onClickButton} className='shine-effect hover:scale-110 border border-[#FD8901] bg-[#FFEF99] hover:bg-[#FD8901] hover:text-white px-8 py-2 mt-3 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                    <div className='w-72 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl p-4 hover:scale-105 transition transform flex flex-col justify-between'>
                        <Carousel bg1={cbg1} bg2={cbg2} bg3={cbg3} bg4={cbg4} styles={'w-full h-48 rounded-md'}/>
                        <div>
                            <p className='text-lg font-serif my-3 font-semibold text-center'>
                                Corporate Events
                            </p>
                            <p className='text-sm my-3 font-light text-center'>
                                Event guidance tailored just for you,
                                For seamless days without dismay,
                                Trust our expertise to light the way
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={onClickButton} className='shine-effect hover:scale-110 border border-[#FD8901] bg-[#FFEF99] hover:bg-[#FD8901] hover:text-white px-8 py-2 mt-3 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                    <div className='w-72 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl p-4 hover:scale-105 transition transform flex flex-col justify-between'>
                        <Carousel bg1={ebg1} bg2={ebg2} bg3={ebg3} bg4={ebg4} styles={'w-full h-48 rounded-md'}/>
                        <div>
                            <p className='text-lg font-serif my-3 font-semibold text-center'>
                                Entrance Events
                            </p>
                            <p className='text-sm my-3 font-light text-center'>
                                Welcome your guests with style and elegance. 
                                Our entrance events create the perfect first impression for any occasion.
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={onClickButton} className='shine-effect hover:scale-110 border border-[#FD8901] bg-[#FFEF99] hover:bg-[#FD8901] hover:text-white px-8 py-2 mt-3 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
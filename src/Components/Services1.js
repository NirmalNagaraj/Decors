import React from 'react'
import Cards from './Cards';
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
import peacock from '../assets/peacockwatermark.png';

const Service1 = () => {
    return (
        <div>
            <div>
                <div>
                    <div className='flex justify-start py-3 pl-4 md:pt-10 md:pl-10'>
                        <img src={peacock} alt='peacock' className='h-20 md:h-32'/>
                    </div>
                    <div>
                        <p className='heading text-2xl md:text-4xl mx-4 md:mx-40 md:py-6 py-2 font-semibold text-center'>Available Services</p>
                    </div>
                    <div>
                        <Cards />
                    </div>
                    
                    <div>

                        <div className='flex justify-end py-6 pr-4 md:pt-6 md:pr-10'>
                            <img src={peacock} alt='peacock' className='h-20 md:h-32'/>
                        </div>
                        <p className='heading text-center mx-8 md:mx-40 md:text-5xl text-3xl my-0 md:my-0 text-blue-700 font-semibold'>
                            Types Of Services We Offer
                        </p>
                        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:mx-32 rounded-3xl md:my-10'>
                            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                                Unmatched Quality and Service
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-10 py-2 pb-8'>
                                <div>
                                    <Carousel bg1={ebg1} bg2={cbg4} bg3={bbg3} bg4={wbg2} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                                </div>
                                <div>
                                    <p className='poppins-regular text-justify font-light leading-relaxed text-xl md:text-xl md:mx-10 mx-0 my-6 md:my-0'>
                                    At Raja Decors, quality and service are at the heart of everything we do.
                                    We source only the freshest blooms from trusted growers, hand-selecting
                                    each stem for its beauty and vitality. Our commitment to excellence 
                                    extends beyond our designs to our personalized service, ensuring a 
                                    seamless and stress-free experience from concept to execution.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:mx-32 rounded-3xl md:my-10'>
                            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                                Wedding Reception & Mugurtham
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-10 py-2 pb-8'>
                                <div className='md:hidden'>
                                <Carousel bg1={wbg1} bg2={wbg2} bg3={wbg3} bg4={wbg4} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                                </div>
                                <div>
                                    <p className='poppins-regular text-justify font-light leading-relaxed text-xl md:text-xl md:mx-5 mx-0 my-6 md:my-0'>
                                        Our ceremonies blend cultural grace with contemporary elegance, 
                                        merging tradition and modernity for cherished moments embodying 
                                        love and commitment. Each celebration exudes timeless beauty and 
                                        joy, uniting hearts in an ambiance of cultural richness and modern 
                                        sophistication, creating unforgettable memories that last a lifetime.
                                    </p>
                                </div>
                                <div className='hidden md:flex'>
                                <Carousel bg1={wbg1} bg2={wbg2} bg3={wbg3} bg4={wbg4} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:mx-32 rounded-3xl md:my-10'>
                            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                                Entrance Decoration
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-10 py-2 pb-8'>
                                <div>
                                <Carousel bg1={ebg1} bg2={ebg2} bg3={ebg3} bg4={ebg4} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                                </div>
                                <div>
                                    <p className='poppins-regular text-justify font-light leading-relaxed text-xl md:text-xl md:mx-10 mx-0 my-6 md:my-0'>
                                        Our grand entrance designs captivate, offering 
                                        a preview of the unforgettable experiences awaiting 
                                        within. Guests are enchanted, drawn into a realm of 
                                        anticipation and wonder, setting the stage for an event 
                                        filled with grandeur and delight. It's a prelude that 
                                        ignites excitement, ensuring every moment is memorable and cherished.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:mx-32 rounded-3xl md:my-10'>
                            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                                Birthday Decoration 
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-10 py-2 pb-8'>
                                <div className='md:hidden'>
                                <Carousel bg1={bbg1} bg2={bbg2} bg3={bbg3} bg4={bbg4} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                                </div>
                                <div>
                                    <p className='poppins-regular text-justify font-light leading-relaxed text-xl md:text-xl md:mx-5 mx-0 my-6 md:my-0'>
                                        Infusing spaces with whimsy and vibrancy, our birthday 
                                        decorations create a realm of joy and celebration. 
                                        Every corner is adorned with magical touches, transporting 
                                        guests to an enchanting experience. With attention to detail 
                                        and creativity, we ensure every moment is memorable, leaving 
                                        all attendees with cherished memories of the festivities.
                                    </p>
                                </div>
                                <div className='hidden md:block'>
                                <Carousel bg1={bbg1} bg2={bbg2} bg3={bbg3} bg4={bbg4} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:mx-32 rounded-3xl md:my-10'>
                            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                                Corporate Event 
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-10 py-2 pb-8'>
                                <div>
                                <Carousel bg1={cbg1} bg2={cbg2} bg3={cbg3} bg4={cbg4} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                                </div>
                                <div>
                                    <p className='poppins-regular text-justify font-light leading-relaxed text-xl md:text-xl md:mx-6 mx-0 my-6 md:my-0'>
                                        Combining professionalism and creativity, our corporate 
                                        events epitomize sophistication and innovation. We offer 
                                        a platform for successful engagements within an ambiance 
                                        of refined elegance and dynamic energy. Tailored to exceed 
                                        every expectation, our events seamlessly blend professionalism 
                                        with creativity, ensuring memorable experiences that leave a 
                                        lasting impression on attendees.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service1
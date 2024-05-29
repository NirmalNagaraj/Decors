import React from 'react'
import landing from '../assets/AboutusLand.jpg';
import hall from '../assets/hall.png';
import peacock from '../assets/peacockwatermark.png';
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
import bg5 from '../assets/AboutusLanding.jpg';
import bg1 from '../assets/coordination.png';
import Carousel from '../Components/Carousel';

const About = () => {
  return (
    <div>
        <div className='bg-cover bg-center w-full h-48 md:h-[450px]' style={{backgroundImage: `url(${landing})`, position: 'relative'}}>
            <div className='text-white text-2xl md:text-7xl font-bold py-10 md:py-20 text-center z-10'>
                <p className='heading border-2 border-white mx-4 md:mx-40 py-2 md:py-8 rounded-2xl' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                Raja Decors -<br className='md:hidden' /> Where Every Petal Paints Your Perfect Day
                </p>
            </div>
        </div>

        <div className='flex justify-start py-3 pl-4 md:pt-10 md:pl-10'>
            <img src={peacock} alt='peacock' className='h-20 md:h-32'/>
        </div>
       
        <div>
            <div data-aos="fade-up" data-aos-duration="1000" className=''>
                <p className='heading text-3xl md:text-4xl text-[#FD8901] font-semibold text-center'>Who are we</p>
                <div>
                    <h1 className='heading md:text-center mx-8 md:mx-40 md:text-4xl text-xl my-10 md:my-5 text-blue-700 font-semibold'>Crafting Unforgettable Moments <br/>with Floral Excellence</h1>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={hall} alt='hall' className='w-10/12 md:w-7/12 h-80 border-8 rounded-3xl border-yellow-500 '/>
                </div>
            </div>
            <div>
                <p className='poppins-regular my-5 mx-5 text-xl md:mx-32 md:text-2xl text-center font-normal md:my-10'>At Raja Decors, we believe that flowers have the power to transform ordinary moments into extraordinary experiences. Our commitment to "Crafting Unforgettable Moments with Floral Excellence" is more than just a tagline—it's the cornerstone of everything we do.</p>
            </div>
            <div className='flex justify-end py-6 pr-4 md:pt-6 md:pr-10'>
                <img src={peacock} alt='peacock' className='h-20 md:h-32'/>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className='heading py-10 gap-10 md:flex block items-center justify-center'>
            <div className='bg-[#e3e6f1] md:w-3/12 w-10/12 mx-6 md:mx-2 px-1 py-10 md:py-14 my-6 rounded-3xl shadow-xl text-center hover:cursor-pointer hover:scale-105'>
                <p className='text-4xl md:text-6xl font-semibold py-5'>800+</p>
                <p className='text-xl md:text-3xl font-semibold py-3'>Events Completed</p>
            </div>
            <div className='bg-[#e3e6f1] md:w-3/12 w-10/12 mx-6 md:mx-2 px-1 py-10 md:py-14 my-6 rounded-3xl shadow-xl text-center hover:cursor-pointer hover:scale-105'>
                <p className='text-4xl md:text-6xl font-semibold py-5'>600+</p>
                <p className='text-xl md:text-3xl font-semibold py-3'>Satisfied Clients</p>
            </div>
            <div className='bg-[#e3e6f1] md:w-3/12 w-10/12 mx-6 md:mx-2 px-1 py-10 md:py-14 my-6 rounded-3xl shadow-xl text-center hover:cursor-pointer hover:scale-105'>
                <p className='text-4xl md:text-6xl font-semibold py-5'>15+</p>
                <p className='text-xl md:text-3xl font-semibold py-3'>Years of Experience</p>
            </div>
        </div>


        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:mx-32 rounded-3xl md:my-10'>
            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                Attention to Detail
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-10 py-2 pb-8'>
                <div>
                    <Carousel bg1={wbg1} bg2={cbg1} bg3={bbg1} bg4={ebg1} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                </div>
                <div>
                    <p className='poppins-regular text-justify font-light leading-relaxed text-xl md:text-xl md:mx-6 mx-0 my-6 md:my-0'>
                        We understand that every petal, every stem, and every arrangement 
                        contributes to the overall atmosphere of an event. That's why we 
                        approach each project with meticulous attention to detail, ensuring 
                        that every floral design is flawlessly executed to enhance the ambiance 
                        and capture the essence of the occasion.
                    </p>
                </div>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:mx-32 rounded-3xl md:my-10'>
            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                Artistry and Innovation
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-10 py-2 pb-8'>
                <div className='md:hidden'>
                <Carousel bg1={wbg2} bg2={cbg2} bg3={bbg2} bg4={ebg2} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                </div>
                <div>
                    <p className='poppins-regular text-justify font-light leading-relaxed text-xl md:text-xl md:mx-6 mx-0 my-6 md:my-0'>
                        Our team of skilled florists combines artistry with innovation to create truly unique and captivating floral arrangements. From classic elegance to modern flair, we are constantly pushing the boundaries of floral design to offer our clients fresh and innovative concepts that leave a lasting impression.
                    </p>
                </div>
                <div className='hidden md:block'>
                <Carousel bg1={wbg2} bg2={cbg2} bg3={bbg2} bg4={ebg2} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                </div>
            </div>
        </div>


        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:mx-32 rounded-3xl md:my-10'>
            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                Emotional Impact
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-10 py-2 pb-8'>
                <div>
                <Carousel bg1={wbg3} bg2={cbg3} bg3={bbg3} bg4={ebg3} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                </div>
                <div>
                    <p className='poppins-regular text-justify font-light leading-relaxed text-xl md:text-xl md:mx-6 mx-0 my-6 md:my-0'>
                        Flowers have a remarkable ability to evoke emotions and create memorable moments. Whether it's the delicate fragrance of a rose or the vibrant colors of a bouquet, our goal is to harness the emotional power of flowers to enhance the atmosphere of any event and create experiences that resonate with our clients and their guests.
                    </p>
                </div>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:mx-32 rounded-3xl md:my-10'>
            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                Personalized Service
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-10 py-2 pb-8'>
                <div className='md:hidden'>
                <Carousel bg1={wbg4} bg2={cbg4} bg3={bbg4} bg4={ebg4} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                </div>
                <div>
                    <p className='poppins-regular text-justify font-light leading-relaxed text-xl md:text-xl md:mx-6 mx-0 my-6 md:my-0'>
                        We understand that every event is unique, and we pride ourselves on offering personalized service tailored to the individual needs and preferences of our clients. From the initial consultation to the final execution, we work closely with our clients to bring their vision to life and ensure that every detail exceeds their expectations.
                    </p>
                </div>
                <div className='hidden md:block'>
                <Carousel bg1={wbg4} bg2={cbg4} bg3={bbg4} bg4={ebg4} styles={'md:h-64 h-44 w-[100%] rounded-3xl'}/>
                </div>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" className='heading text-center py-10 text-blue-700 font-semibold text-xl md:text-3xl mx-2 md:mx-5'>
            At Raja Decors, We Don't Just Provide Floral Decorations-We Craft Experiences 
            That Are As Unique And Unforgettable As The People Celebrating Them. Whether 
            It's A Wedding, Corporate Event, Or Birthday Celebration, We Are Dedicated To 
            Creating Moments Of Joy, Beauty, And Elegance That Will Be Cherished For A Lifetime.
        </div>


    </div>
  )
}

export default About
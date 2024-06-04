import React from 'react'
import bg5 from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_e34a28c8.jpg';
import bg1 from '../assets/coordination.png';

const Service = () => {
    return (
        <div>
            <div>
                <div>
                    <p className='md:text-3xl text-4xl text-[#F1518B] font-semibold text-center my-5 uppercase'>Services</p>
                    <p className='text-center font-serif md:text-5xl text-2xl'>Services We Bring You</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 md:mx-32 mx-10 space-y-6 md:space-y-0 my-10'>
                    <div className='w-80 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl px-3 py-4 hover:scale-105 transition transform'>
                        <img src={bg5} alt='Decoration' className='w-[100%] h-60 rounded-md' height={100} width={100} />
                        <div>
                            <p className='text-xl font-serif my-3 font-semibold'>
                                Wedding Decoration
                            </p>
                            <p className='text-sm my-3 font-light'>
                                Wishing your Event held a grand
                                style? We promise to provide the
                                perfect decorations.
                            </p>
                            <button className='border border-[#F1518B] hover:bg-[#F1518B] hover:text-white px-16 py-2 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                    <div className='w-80 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl px-3 py-4 hover:scale-105 transition transform'>
                        <img src={bg5} alt='Catering' className='w-[100%] h-60 rounded-md' height={100} width={100} />
                        <div>
                            <p className='text-xl font-serif my-3 font-semibold'>
                                Birthday Decoration
                            </p>
                            <p className='text-sm my-3 font-light'>
                                Customized catering for any occasion.
                                We tailor menus to your taste, ensuring every dish reflects
                                your unique style and vision.
                            </p>
                            <button className='border border-[#F1518B] hover:bg-[#F1518B] hover:text-white px-16 py-2 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                    <div className='w-80 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl px-3 py-4 hover:scale-105 transition transform'>
                        <img src={bg1} alt='coordination' className='w-[100%] h-60 rounded-md' height={100} width={100} />
                        <div>
                            <p className='text-xl font-serif my-3 font-semibold'>
                                Corporate Events
                            </p>
                            <p className='text-sm my-3 font-light'>
                                Event guidance tailored just for you,
                                For seamless days without dismay,
                                Trust our expertise to light the way
                            </p>
                            <button className='border border-[#F1518B] hover:bg-[#F1518B] hover:text-white px-16 py-2 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
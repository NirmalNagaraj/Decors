import React from 'react'
import contactimg from '../assets/contactusimg.png';

const Contactus = () => {
    return (
        <div>
            <div className='mx-10 md:mx-32 my-20'>
                <div>
                    <p className='text-4xl text-[#F1518B]'>
                        CONTACT US
                    </p>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className=''>
                        <img src={contactimg} alt='contactimg' className='py-10' />
                    </div>
                    <div className='py-10'>
                        <div>
                            <p className='text-[#F1518B] font-semibold text-3xl'>Visit us</p>
                        </div>
                        <p className='font-normal text-lg py-6'>
                            No:7, 545, Velachery Main Rd, United Colony,
                            Vijayanagaram, Ranganathapuram, Medavakkam,
                            Chennai, Tamil Nadu 600100
                        </p>
                        <div>
                            <p className='text-[#F1518B] font-semibold text-3xl'>Contact</p>
                            <p className='font-normal text-lg pt-3 py-1'>contact@company.com</p>
                            <p className='font-normal text-lg py-1'>+91 99402 29923</p>
                            <div className='space-y-5'>
                                <input placeholder='   Email' className='w-80 md:w-96 py-2 rounded-full border-2 hover:border-[#F1518B] bg-[#F2F2F2]' /> <br />
                                <textarea placeholder='   Message' className='py-3 w-80 md:w-96 rounded-full border-2 hover:border-[#F1518B] bg-[#F2F2F2]' /> <br/>
                                <button className='border border-[#F1518B] hover:bg-[#F1518B] hover:text-white px-10 py-2 rounded-3xl font-semibold'>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
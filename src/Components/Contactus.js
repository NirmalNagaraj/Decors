import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import servicepng from '../assets/service.png';
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import peacockimg from '../assets/peacockwatermark-2 1.png';

const Contactus = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        phone: '',
        emailid: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.from_name) newErrors.from_name = 'Name is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.emailid) newErrors.emailid = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        emailjs.sendForm('service_o15u8dr', 'template_onogqzh', form.current, 'tQswPx-gvmxTNRVOt')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                setFormData({ from_name: '', phone: '', emailid: '', message: '' }); // Reset form fields after submission
                setErrors({});
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            });

        e.target.reset(); // Reset form fields after submission
    };

    return (
        <div>
            <div className='flex justify-center mt-3'>
                <div className='bg-cover bg-center w-screen' style={{ backgroundImage: `url(${servicepng})` }}>
                    <div className='text-white text-2xl md:text-7xl font-bold py-24 md:py-40 text-center'>
                        <p className='border-2 border-white mx-4 md:mx-40 py-10 md:py-8 rounded-2xl'>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-10 md:hidden'>
                <img src={peacockimg} alt='peacock' className='h-40'/>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='grid grid-cols-1 md:grid-cols-2'>
                <div className='mx-4 md:mx-32 md:my-20 my-5'>
                    <div>
                        <p className='text-[#FD8901] font-bold text-4xl text-center md:text-left md:text-6xl'>Visit us</p>
                    </div>
                    <p className='font-medium text-xl text-center md:text-left md:text-2xl py-6 capitalize'>
                        No:11/163, Vadakkupattu mainroad, <br />
                        Kovilambakkam, <br />Chennai-600129
                    </p>
                    <div>
                        <p className='text-[#FD8901] font-bold text-4xl text-center md:text-left md:text-6xl'>Contact</p>
                        <div className=''>
                            <div className='flex space-x-7 items-center'>
                                <img src={mail} alt='mail' className='h-7 w-7 my-3 md:block hidden' />
                                <p className='font-medium text-xl text-center md:text-left md:text-2xl py-6'>rajadecorator1980@gmail.com</p>
                            </div>
                            <div className='flex space-x-7 items-center'>
                                <img src={phone} alt='phone' className='h-7 w-7 my-1 md:block hidden' />
                                <p className='font-medium text-xl text-center md:text-left md:text-2xl md:py-6'>+91 99402 29923</p>
                            </div>
                            <div className='flex space-x-7 items-center'>
                                <img src={phone} alt='phone' className='h-7 w-7 my-1 md:block hidden' />
                                <p className='font-medium text-xl text-center md:text-left md:text-2xl md:py-6'>+91 98406 01980</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={peacockimg} alt='peacock' className='md:mt-32 md:mx-20 md:block hidden'/>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <form ref={form} onSubmit={sendEmail} className='mx-4 md:mx-40 mb-20 flex flex-col justify-center items-center'>
                <h1 className='text-[#FD8901] font-bold py-4 text-3xl text-center md:text-4xl'>Email us</h1>
                <input
                  name='from_name'
                  placeholder='Name'
                  type='text'
                  className={`px-3 w-full mx-4 py-3 rounded-lg border-2 ${errors.from_name ? 'border-red-500' : 'hover:border-[#FD8901]'} bg-[#F2F2F2]`}
                  value={formData.from_name}
                  onChange={handleInputChange}
                  required
                />
                {errors.from_name && <p className="text-red-500 mx-4">{errors.from_name}</p>}
                <br />
                <input
                  name='phone'
                  placeholder='Phone'
                  type='text'
                  className={`px-3 w-full mx-4 py-3 rounded-lg border-2 ${errors.phone ? 'border-red-500' : 'hover:border-[#FD8901]'} bg-[#F2F2F2]`}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <p className="text-red-500 mx-4">{errors.phone}</p>}
                <br />
                <input
                  name='emailid'
                  placeholder='Email'
                  type='email'
                  className={`px-3 w-full mx-4 py-3 rounded-lg border-2 ${errors.emailid ? 'border-red-500' : 'hover:border-[#FD8901]'} bg-[#F2F2F2]`}
                  value={formData.emailid}
                  onChange={handleInputChange}
                  required
                />
                {errors.emailid && <p className="text-red-500 mx-4">{errors.emailid}</p>}
                <br />
                <textarea
                  name='message'
                  placeholder='Message'
                  className={`px-3 py-3 w-full mx-4 rounded-lg border-2 ${errors.message ? 'border-red-500' : 'hover:border-[#FD8901]'} bg-[#F2F2F2]`}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                {errors.message && <p className="text-red-500 mx-4">{errors.message}</p>}
                <br />
                <input type='hidden' name='to_name' value='RajaDecors' />
                <button type='submit' className='py-3 w-full mx-4 rounded-lg border-2 bg-[#FD8901] text-white hover:border-[#FD8901] font-semibold'>Send Message</button>
              </form>
            </div>
        </div>
    );
}

export default Contactus;

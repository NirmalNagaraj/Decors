import React, { useRef, useState } from 'react';
import hall from '../assets/hall.png';
import Cards from '../Components/Cards';
import Services from '../Components/Service';
import Offer from '../Components/Offer';
import peacock from '../assets/peacockwatermark.png';
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import contacting from '../assets/contactusimg.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import emailjs from 'emailjs-com';
import SimpleSlider from '../Components/CarouselHome';

const Home = () => {
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
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  const AboutButton = () => {
    window.location.href = 'about';
  };

  return (
    <div className="">
      <div className=''>
        <SimpleSlider />
      </div>
      <div className='flex justify-start pt-4 items-center md:mt-10 pl-4 md:pl-10'>
        <img src={peacock} alt='peacock' className='h-20 md:h-32'/>
      </div>
      <div className="heading text-2xl md:text-4xl mx-4 md:mx-40 font-semibold my-2 text-center">
        Available Services
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="z-20 pt-0 md:pt-4">
        <Cards />
      </div>

      <div className='flex justify-end py-3 pt-5 pr-4 md:pt-10 md:pr-10'>
        <img src={peacock} alt='peacock' className='h-20 md:h-32'/>
      </div>
      <div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="heading text-3xl text-blue-600 font-semibold mx-10 md:mx-32 mb-10">
            WHO WE ARE
          </p>
          <p className="heading md:text-5xl mx-10 md:mx-32 text-2xl text-[#FD8901] font-semibold">
              Raja Decors - Where Every Petal Paints Your Perfect Day
          </p>
          <div className="mx-10 md:mx-32 mt-5 md:mt-10 md:space-x-10 gap-10 md:gap-0 grid md:grid-cols-2 grid-cols-1">
            <img src={hall} alt="hall" className="border-4 border-[#FFD700]" />
            <div>
              <p className="font-extralight md:text-2xl text-xl poppins-regular">
                From intimate gatherings to grand celebrations, we are dedicated to bringing your unique vision to life. Our passion for floral artistry drives us to create bespoke arrangements that perfectly complement your style, theme, and ambiance, ensuring every detail is a reflection of your personality and taste.
              </p>
              <div className="grid justify-between md:grid-cols-2 grid-cols-1">
                <div>
                  <button onClick={AboutButton} className="border border-[#FD8901] bg-[#FD8901] transition duration-500 hover:scale-125 hover:text-white px-3 py-2 my-5 rounded-3xl font-semibold shine-effect">Know More About Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="z-30 mt-20">
          <Services />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Offer />
        </div>
        <div>
          <div className="mx-4 my-20">
            <div>
              <p className="text-4xl text-center text-[#FD8901] ubuntu-bold">
                CONTACT US
              </p>
            </div>

            {/* contact */}
            <div className='grid grid-cols-1 md:grid-cols-2' data-aos="fade-up" data-aos-duration="1000">
                <div className='rounded-3xl'>
                    <img src={contacting} alt='peacock' className='md:mt-20 md:mx-20 md:py-0 py-5 rounded-3xl'/>
                </div>
                <div className='mx-4 md:mx-32 md:my-20'>
                    <div>
                        <p className='text-[#FD8901] font-bold text-3xl text-center md:text-left md:text-4xl'>Visit us</p>
                    </div>
                    <p className='font-medium text-xl capitalize text-center md:text-left md:text-xl py-6'>
                        No:11/163, Vadakkupattu mainroad, <br />
                        Kovilambakkam, <br />Chennai-600129
                    </p>
                    <div>
                        <p className='text-[#FD8901] font-bold text-3xl text-center md:text-left md:text-4xl'>Contact</p>
                        <div className=''>
                            <div className='flex space-x-7 items-center'>
                                <img src={mail} alt='mail' className='h-7 w-7 my-3 md:block hidden' />
                                <p className='font-medium text-xl text-center md:text-left md:text-xl py-6'>rajadecorator1980@gmail.com</p>
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
            </div>
            {/* endcontact */}

            <div data-aos="fade-up" data-aos-duration="1000">
              <form ref={form} onSubmit={sendEmail} className='mx-0 md:mx-40 mb-20 flex flex-col justify-center items-center'>
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
        </div>
      </div>
    </div>
  );
};

export default Home;

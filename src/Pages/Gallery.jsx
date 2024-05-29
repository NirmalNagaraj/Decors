import React, { useState, useEffect } from 'react';
import Moon from '../assets/Raja_Decors_logo 1.png';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);
  const urlvar = "https://raja-decors-backend.vercel.app";

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);  // Start loading
      try {
        const response = await fetch(`${urlvar}/user/image`);
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          console.error('Error fetching images:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);  // Stop loading
      }
    };

    fetchImages();
  }, []);

  const filteredImages = filter === 'All' ? images : images.filter(image => image.imageType === filter);

  return (
    <div>
      <div className='my-10'>
        <ul className='heading flex items-center justify-center md:gap-10 font-semibold text-base gap-3 md:text-3xl'>
          <li className={`cursor-pointer hover:text-blue-700 hover:scale-125 ${filter === 'All' ? 'text-blue-700' : ''}`} onClick={() => setFilter('All')}>All</li>
          <li className={`cursor-pointer hover:text-blue-700 hover:scale-125 ${filter === 'Wedding' ? 'text-blue-700' : ''}`} onClick={() => setFilter('Wedding')}>Wedding</li>
          <li className={`cursor-pointer hover:text-blue-700 hover:scale-125 ${filter === 'Entrance' ? 'text-blue-700' : ''}`} onClick={() => setFilter('Entrance')}>Entrance</li>
          <li className={`cursor-pointer hover:text-blue-700 hover:scale-125 ${filter === 'Corporate' ? 'text-blue-700' : ''}`} onClick={() => setFilter('Corporate')}>Corporate</li>
          <li className={`cursor-pointer hover:text-blue-700 hover:scale-125 ${filter === 'Birthday' ? 'text-blue-700' : ''}`} onClick={() => setFilter('Birthday')}>Birthday</li>
        </ul>
      </div>
      {loading ? (
        <div className='flex items-center justify-center h-64'>
          <div>
            <p className='text-center text-xl font-semibold'>Loading.....</p>
            <img src={Moon} alt="Loading" className='' />
          </div>
        </div>
      ) : (
        filteredImages.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-5 md:mx-10'>
            {filteredImages.map((image, index) => (
              <div key={index} className='my-5'>
                <div className='w-full h-64 md:h-96'>
                  <img src={image.profilePicture} alt={`img${index}`} className='w-full h-full rounded-3xl border-4 border-[#FFD700]'/>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex items-center justify-center h-64'>
            <p className='text-xl font-semibold'>No images available currently</p>
          </div>
        )
      )}
    </div>
  );
}

export default Gallery;

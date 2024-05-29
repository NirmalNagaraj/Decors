import React, { useEffect, useState } from 'react';

const DeleteImage = () => {
    const [images, setImages] = useState([]);
    const urlvar = "https://raja-decors-backend.vercel.app";
  
    useEffect(() => {
      const fetchImages = async () => {
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
        }
      };
  
      fetchImages();
    }, []);
  
    const handleDelete = async (imageId) => {
        try {
          const response = await fetch(`${urlvar}/user/delete`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageId }),
          });
          if (response.ok) {
            setImages(images.filter(image => image._id !== imageId));
          } else {
            console.error('Error deleting image:', response.statusText);
          }
        } catch (error) {
          console.error('Error deleting image:', error);
        }
      };
      
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center my-10">Images</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-10 my-10">
          {images.map((image, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md">
              <img src={image.profilePicture} alt={`Image ${index}`} className="max-h-64 w-full object-contain mx-auto" />
              <p className="text-center mt-2">{image.imageType}</p>
              <button onClick={() => handleDelete(image._id)} className="block mx-auto mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  };  

export default DeleteImage;

import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from '../firebase';

const Admin = () => {
  const [image, setImage] = useState(null);
  const [imageType, setImageType] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const urlvar = "https://raja-decors-backend.vercel.app";

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTypeChange = (e) => {
    setImageType(e.target.value);
  };

  const handleUpload = async () => {
    if (image && imageType) {
      setIsLoading(true); // Set loading to true when starting the upload process
      const storage = getStorage(app);
      const storageRef = ref(storage, image.name);
      await uploadBytesResumable(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);
      try {
        const response = await fetch(`${urlvar}/user/upload`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ imageURL: downloadURL, imageType }),
        });
        if (response.ok) {
          alert("Image Successfully Uploaded")
          console.log('Image URL stored successfully');
          setImage(null);
          setImageType('');
        } else {
          console.error('Error storing image URL:', response.statusText);
        }
      } catch (error) {
        alert('error');
        console.error('Error storing image URL:', error);
      } finally {
        setIsLoading(false); // Set loading to false after the upload process is complete
      }
    } else {
      console.error('Please select an image and image type');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md md:w-full md:max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Image Uploader</h2>
        <div className="text-center mb-6">
          <label htmlFor="imageType" className="block text-gray-700 font-bold mb-2">
            Image Type
          </label>
          <select
            id="imageType"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={imageType}
            onChange={handleTypeChange}
            required
          >
            <option value="">Select Image Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Entrance">Entrance</option>
            <option value="Corporate">Corporate</option>
            <option value="Birthday">Birthday</option>
          </select>
        </div>
        <div className="text-center mb-10">
          <div>
            <p className="font-semibold text-lg">Upload your image here:</p>
          </div>
          <div className="flex justify-center mt-4">
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>
        <div className="flex justify-center">
          <button 
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={handleUpload}
            disabled={isLoading} // Disable the button when loading is true
          >
            {isLoading ? 'Uploading...' : 'Upload Image'} {/* Display 'Uploading...' while loading */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;

import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    function Logout(){
        window.localStorage.clear();
        window.location.href='./adminLogin';
      }

  return (
    <div className='bg-gray-100'>
        <div className="flex justify-end p-4">
            <button
            onClick={Logout}
            className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
            >
            Logout
            </button>
        </div>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
            <div className="flex flex-col items-center space-y-4">
                <Link
                to="/admin"
                className="bg-blue-500 text-white py-4 px-20 md:px-44 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                Upload Image
                </Link>
                <Link
                to="/imagedelete"
                className="bg-red-500 text-white py-4 px-20 md:px-44 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                Delete Image
                </Link>
            </div>
        </div>
    </div>
  );
};

export default AdminDashboard;

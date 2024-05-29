import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Footer from './Components/Footer';
import About from './Pages/About';
import whatsApp from './assets/WhatsApp.png';
import Gallery from './Pages/Gallery';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import AdminDashboard from './Pages/AdminDashboard';
import DeleteImage from './Pages/DeleteImage';
import TransitionWrapper from './Components/TransitionWrapper';
import Navbar from './Components/Navbar';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=9840601980`;
  
  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };
  const url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADS0lEQVR4nO2ZS0hUURjHf6ZZGJWUVqYWGbQSMlpkRYtE2oRBRAVFmGIYZLWM1tKqwih6CLWpXUXagx4LSVr0EiwhIm3Rg4qg1J5oz4lD/wuHYebOXBnvnIH5wd3M/c7c79x7vv/5vu9AlixpZR3QA4wCfcByMox84DgQibqGgVIyhOlAlxwfAVqAIuCyfrtOBjAHeCyH3wJLo+591L1GHGYa0CtHnwLzY9hs1f1PwDwcZBJwR04+AWb62Ha4vMQOyLlXQFkCW7PEBmVfj2MMybHVSdpvk70ZV4JDjMqxwgBjrmmMWWrO8FxOVQYYU6agN+M24wgdcsioUhB2aFw/jtAih84GHFekcb+BHBxgIfAX+AJMDTBuuyZi8jFn6JJTO5O0nwy8dFGGN1nrPS8J+/2yfwRMwCFylZoY55oT2M4CPsu2FgfZIOfeAQU+du2yMxmxk+QAD+TkQZ/Y+CqbJhxmCfAT+AOsimOzxyq0FuAwrVbgF8T5cldl8zDBMkx7qdsnR03JG4tCSxw6JRZOUqVS1zja4LORfpBNuyu7eywarNp9WUyL/50VL/jbcJijliTH66DUWF/vMI4yEbgtJ+/6BHad1C6iitNJioEXcvKGxCAWG63JtLkaM4uA93LyvI9K1VnL7JSrarZYm6Bx8rTPG6+xBKAzznLMlZiYpNNsvgNKXENjBfAticCutqS5J6pPVmvtU9HXRWA2IbEG+GFNJt6XqbA2zSGVxl5GEFHcmVqmSPe8jNp0NLeENZn11mTO+MSCyQCuRL114/A+JaA25RITz65DfbRQvoy3zC74qJn5YrsVNydVz/jRaMXioPpo485K66E3EySQpjWbLKVW7yyiJTmXEPIyT5rvpbj7WG91Qod9UqWU7jNeM+JNih9YYomEketQMoBuPXDUJ2seCzP0v98JMTc7Zq3tEykqvPZa+V6oNFjN8QGJwliptqR+LWmgytrBTRpyCJgS8D8qLCE5QhrJVw/gl1XXNCfZBCwGnmncLS3btGMOVu9bsdOv9my8XnO5ld70BuxJjzs5agJ6bzmixvk5HWlU6njcZM+vLbkNLYkMSp4Oh7p0ChCJc3VrYhmBCeZdwCWp24iy39aAKU2WLKSQf3jSBy3qRwNwAAAAAElFTkSuQmCC'
  const phoneNumber = '9840601980';
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const isLoggedIn = window.localStorage.getItem('loggedIn');

  return (
    <Router>
      <Navbar />
      <div className='fixed top-72 right-0 z-50'>
        <img onClick={handleClick} className='whatsapp-button bg-[#3DDA3A] md:hover:pl-6 md:hover:pr-3 hover:cursor-pointer md:py-2 md:pl-3 rounded-l-full' src={whatsApp} alt="whatsapp" />
      </div>
      
      <div className='fixed top-96 right-0 z-50'>
      <img src={url} onClick={handleCall} className='phone-button bg-blue-500 md:hover:pl-6 md:hover:pr-3 hover:cursor-pointer pl-2 pr-2 md:py-2 md:pl-3 md:pr-2 rounded-l-full'></img>
      </div>
      <TransitionWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/adminLogin" element={<Login />} />
          <Route path="/admin" element={isLoggedIn === 'true' ? <Admin /> : <Login />} />
          <Route path="/dashboard" element={isLoggedIn === 'true' ? <AdminDashboard /> : <Login />} />
          <Route path="/imagedelete" element={isLoggedIn === 'true' ? <DeleteImage /> : <Login />} />
        </Routes>
      </TransitionWrapper>
      <Footer />
    </Router>
  );
}

export default App;
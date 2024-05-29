import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionWrapper = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timeoutId = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Duration of the transition

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div className={`transition-transform duration-500 ease-in-out ${isTransitioning ? 'transform -translate-x-full' : 'transform translate-x-0'}`}>
      {children}
    </div>
  );
};

export default TransitionWrapper;

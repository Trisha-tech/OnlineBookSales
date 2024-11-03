import React, { useEffect, useState } from 'react';
// import './Preloader.css'; 

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => setIsVisible(false), 300); 
    }, 2500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    isVisible && (
      <div className={`preloader fixed top-0 left-0 w-full h-full bg-[#286ac5] flex justify-center items-center z-[9999] transition-opacity ease-out duration-500 ${fadeOut ? 'fade-out opacity-0' : ''}`}>
        <video autoPlay muted loop className="preloader-video">
          <source src="/preload.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  );
};

export default Preloader;

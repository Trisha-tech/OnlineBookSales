import React, { useEffect, useState } from 'react';
import './Preloader.css'; 

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
      <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
        <video autoPlay muted loop className="preloader-video">
          <source src="/preload.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  );
};

export default Preloader;

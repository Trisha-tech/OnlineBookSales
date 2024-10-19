import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

const ProgressBar = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '5px',
  background: 'linear-gradient(90deg, #00BFFF, #FFD700)', // Gradient from blue to yellow
  zIndex: 1200, 
  boxShadow: '0 0 10px #00BFFF, 0 0 20px #FFD700',  // Glowing effect with blue and yellow
  transition: 'width 0.2s ease-out', 
  borderRadius: '2px',  // Rounded edges
  transform: 'translateZ(0)',  // Fix any potential rendering issues
  animation: 'pulse 2s infinite', // Pulse animation for extra glow effect
  scrollBehavior:'smooth'
});

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateProgressBar = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateProgressBar);
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);

  return <ProgressBar style={{ width: `${scrollProgress}%` }} />;
};

// CSS keyframe animation for pulse effect
const styles = document.createElement('style');
styles.innerHTML = `
  @keyframes pulse {
    0% {
      box-shadow: 0 0 5px #00BFFF, 0 0 10px #FFD700;
    }
    50% {
      box-shadow: 0 0 20px #00BFFF, 0 0 30px #FFD700;
    }
    100% {
      box-shadow: 0 0 5px #00BFFF, 0 0 10px #FFD700;
    }
  }
`;
document.head.appendChild(styles);

export default ScrollProgressBar;

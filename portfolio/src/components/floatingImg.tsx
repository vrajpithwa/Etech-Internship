import React from 'react';
import floatImg from '../assets/logo512.png';

const FloatingImage: React.FC = () => {
  return (
    <>
      <img
        src={floatImg}
        alt="Floating"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px', // Adjust as needed
          height: 'auto',
          animation: 'float 2s ease-in-out infinite'
        }}
      />
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
        
      </style>
    </>
  );
};

export default FloatingImage;

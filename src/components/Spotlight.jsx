import React, { useState, useEffect } from 'react';

const Spotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    // position: `fixed`,
    // top: `0`,
    // left: `0`,
    // width: `100%`,
    // height: `100%`,
    // pointerEvents: `none`, // Allow interactions with elements beneath
    // transition: `background 0.3s`,
  };

  return <div className='hidden lg:block pointer-events-none fixed inset-0 z-30 transition duration-300 ' style={spotlightStyle}></div>;
};

export default Spotlight;

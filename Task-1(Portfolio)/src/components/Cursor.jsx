import React, { useState, useEffect } from 'react';
import "../styles/cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      const cursorElement = document.querySelector('.custom-cursor');
      cursorElement.classList.add('pulse-animation');
      setTimeout(() => {
        cursorElement.classList.remove('pulse-animation');
      }, 500);
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default Cursor;
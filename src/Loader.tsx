import React from 'react';
import './App.css'; // Import the CSS for styling

const Loader: React.FC = () => {
  return (
    <div className="loader h-full">
      <div className="spinner"></div>
      <p className='italic'>Loading...</p>
    </div>
  );
};

export default Loader;
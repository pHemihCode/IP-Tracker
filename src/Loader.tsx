import React from "react";
import "./App.css"; // Import the CSS for styling

const Loader: React.FC = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;

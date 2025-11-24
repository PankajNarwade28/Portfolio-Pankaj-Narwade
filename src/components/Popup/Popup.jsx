import React, { useState, useEffect } from "react";
import "./Popup.css";

export const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay on every page load
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="popup-close-btn" onClick={handleClose}>
          ×
        </button>
        <div className="popup-content">
          <div className="popup-thumbnail">
            <img 
              src="/assets/images/image.png" 
              alt="New Portfolio Thumbnail" 
            />
          </div>
          <div className="popup-info">
            <h2 className="popup-title">Check Out My New Portfolio!</h2>
            <p className="popup-description">
              I've built a brand new portfolio website with updated projects and features.
            </p>
            <a 
              href="https://pankajnarwade.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="popup-link"
            >
              Visit New Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

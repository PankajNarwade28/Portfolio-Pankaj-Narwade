import React, { useState, useEffect } from "react";
import "./Popup.css";

export const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark popup as seen in localStorage
    localStorage.setItem("hasSeenPopup", "true");
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
              src="https://via.placeholder.com/400x250/667eea/ffffff?text=New+Portfolio" 
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

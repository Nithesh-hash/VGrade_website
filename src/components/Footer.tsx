import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">VGrade</h2>
            <p>An offline semester GPA and CGPA projection tool for VIT students.</p>
          </div>
          

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VGrade. All rights reserved.</p>
          <div className="footer-badges">
            <span className="badge">No Analytics</span>
            <span className="badge">100% Offline</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Download } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar container">
        <div className="navbar-logo">
          {/* We'll use text for logo since we don't have an SVG asset */}
          <span className="logo-text">VGrade</span>
        </div>
        


        <div className="navbar-cta">
          <a href="#download" className="pill-button">
            <Download size={16} />
            Get Android App
          </a>
        </div>
      </div>
    </nav>
  );
};

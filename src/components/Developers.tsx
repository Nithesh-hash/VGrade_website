import React from 'react';
import './Developers.css';

export const Developers: React.FC = () => {
  return (
    <section className="developers-section container" id="developers">
      <div className="developers-header">
        <h2>Developers</h2>
      </div>
      
      <div className="developers-grid">
        <a 
          href="https://www.linkedin.com/in/nithesh-kumar-t-b4028130a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="developer-card"
        >
          <div className="developer-image-wrapper">
            {/* Note: Place your first image as nithesh.jpg in the public/ folder */}
            <img style={{ objectPosition: 'top' }} src="/nithesh.jpg" alt="Nithesh Kumar T" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Nithesh+Kumar&background=ebd1fc&color=1a1a1a&size=150'; }} />
          </div>
          <div className="developer-info">
            <h3>Nithesh Kumar T</h3>
            <span className="linkedin-link">View on LinkedIn ↗</span>
          </div>
        </a>

        <a 
          href="https://www.linkedin.com/in/dhanvanthsk/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="developer-card"
        >
          <div className="developer-image-wrapper">
            {/* Note: Place your second image as dhanvanth.jpg in the public/ folder */}
            <img src="/dhanvanth.jpg" alt="Dhanvanth SK" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Dhanvanth+SK&background=ebd1fc&color=1a1a1a&size=150'; }} />
          </div>
          <div className="developer-info">
            <h3>Dhanvanth SK</h3>
            <span className="linkedin-link">View on LinkedIn ↗</span>
          </div>
        </a>
      </div>
    </section>
  );
};

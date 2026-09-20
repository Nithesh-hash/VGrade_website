import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Banner.css';

export const Banner: React.FC = () => {
  return (
    <div className="top-banner">
      <p>
        <strong>VGrade is now available for Android.</strong>{' '}
        <a href="#download" className="banner-link">
          Download APK <ArrowRight size={14} />
        </a>
      </p>
    </div>
  );
};

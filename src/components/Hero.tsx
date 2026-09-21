import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const textPathRef = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const duration = 25000; // 25s
    const start = performance.now();

    const animate = (time: number) => {
      if (!textPathRef.current) return;
      
      const elapsed = (time - start) % duration;
      const progress = elapsed / duration;
      
      // Calculate offset from -50% to 0%
      const currentOffset = -50 + (progress * 50);
      
      textPathRef.current.setAttribute('startOffset', `${currentOffset}%`);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="hero-section container">
      <div className="hero-content">
        <p className="hero-eyebrow">VIT GPA & CGPA CALCULATOR</p>
        <h1 className="hero-title">
          Calculate smarter.<br />
          <em>Plan better. Achieve higher.</em>
        </h1>
        <p className="hero-subtitle">
          A GPA and CGPA calculator designed specifically for VIT Vellore students. <br/>
          Calculate GPA, CGPA, grade points and course improvement impact easily.
        </p>
        <div className="hero-actions">
          <a href="#download" className="hero-cta">
            <Download size={18} />
            Get VGrade for Android
          </a>
        </div>
        <p className="hero-platforms">
          Available on Android. Completely offline.
        </p>
      </div>
      

      {/* Background Gradient Orbs */}
      <div className="bg-glow-bottom"></div>

      {/* Floating Wavy Text */}
      <div className="wavy-text-container">
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="wavy-svg">
          <path id="wavyPath" d="M -100,100 C 300,200 900,0 1300,100" fill="none" stroke="#1a1a1a" strokeWidth="48" strokeLinecap="round" />
          <text fill="white" fontSize="14" fontWeight="500" letterSpacing="0.5">
            <textPath ref={textPathRef} href="#wavyPath" startOffset="-50%">
              VGrade is an application that estimates your semester GPA and cumulative CGPA from grades • It does arithmetic on figures you provide • It does not connect to any university system, does not retrieve your results, and does not verify anything you type • VGrade works offline and stores everything locally on your phone • No account, no login, no sign-up • Nothing you enter is uploaded, transmitted, synced or shared • The developer has no access to your data and cannot retrieve it • There is no backup and no cloud copy • VGrade is an application that estimates your semester GPA and cumulative CGPA from grades
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
};

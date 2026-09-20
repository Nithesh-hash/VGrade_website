import React from 'react';
import './SocialProof.css';

export const SocialProof: React.FC = () => {
  return (
    <section className="social-proof-section">
      <div className="container">
        <h2 className="social-proof-title">Built around how you study.</h2>
        <div className="proof-cards">
          <div className="proof-card dark">
            <h3>Calculate smarter.</h3>
            <p>VGrade handles the complexities of VIT's grading system so you don't have to. Easily switch between GPA, CGPA, and Target Planning with a single tap.</p>
          </div>
          <div className="proof-card light">
            <h3>Plan better. Achieve higher.</h3>
            <p>Will you get a 9 CGPA this semester? Use the Target Planner and Grade Impact Analysis to find exactly what grades you need to hit your goals.</p>
          </div>
        </div>
        
        <div className="quote-section">
          <blockquote>
            "Will I get 9 CGPA this semester? Find the exact GPA you need this semester to achieve your targeted CGPA goal."
          </blockquote>
          <div className="quote-author">— VGrade Target Planner</div>
        </div>
      </div>
    </section>
  );
};

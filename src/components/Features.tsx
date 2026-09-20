import React from 'react';
import { Calculator, TrendingUp, BarChart2, Target } from 'lucide-react';
import './Features.css';

const featureData = [
  {
    id: 'gpa',
    icon: <Calculator size={28} />,
    title: 'GPA Calculator',
    description: 'Calculate your semester GPA by entering credits and grades for each course.'
  },
  {
    id: 'cgpa',
    icon: <TrendingUp size={28} />,
    title: 'CGPA Calculator',
    description: 'Update your cumulative GPA by entering previous records and current semester performance.'
  },
  {
    id: 'impact',
    icon: <BarChart2 size={28} />,
    title: 'Grade Impact Analysis',
    description: 'See exactly how different grade scenarios in your courses will affect your overall GPA.'
  },
  {
    id: 'target',
    icon: <Target size={28} />,
    title: 'Target CGPA Planner',
    description: 'Find the exact GPA you need this semester to achieve your targeted CGPA goal.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="features-section container" id="features">
      <div className="features-header">
        <h2>Engineered for absolute accuracy.</h2>
        <p>A pure TypeScript engine that computes text. A Kotlin layer that draws it.</p>
      </div>
      
      <div className="features-grid">
        {featureData.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

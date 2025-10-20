import React from 'react';
import './Experience.css';

interface ExperienceProps {
  onViewMore: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ onViewMore }) => {
  return (
    <section className="experience">
      <div className="section-header">
        <h2>Professional Experience</h2>
        <button onClick={onViewMore} className="view-more-btn">
          View Full History →
        </button>
      </div>
      <div className="experience-item">
        <h3>Job Title</h3>
        <p className="company">Company Name</p>
        <p className="period">Month Year - Present</p>
        <ul>
          <li>Key achievement or responsibility</li>
          <li>Key achievement or responsibility</li>
          <li>Key achievement or responsibility</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
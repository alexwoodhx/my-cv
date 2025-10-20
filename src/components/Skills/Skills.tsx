import React from 'react';
import './Skills.css';

interface SkillsProps {
  onViewMore: () => void;
}

const Skills: React.FC<SkillsProps> = ({ onViewMore }) => {
  return (
    <section className="skills">
      <div className="section-header">
        <h2>Skills</h2>
        <button onClick={onViewMore} className="view-more-btn">
          View All Skills →
        </button>
      </div>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>Your Skill 1</li>
            <li>Your Skill 2</li>
            <li>Your Skill 3</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Frameworks & Tools</h3>
          <ul>
            <li>Your Framework 1</li>
            <li>Your Framework 2</li>
            <li>Your Framework 3</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
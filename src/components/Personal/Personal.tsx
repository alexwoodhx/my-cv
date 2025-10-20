import React from 'react';
import './Personal.css';

interface PersonalProps {
  onViewMore: () => void;
}

const Personal: React.FC<PersonalProps> = ({ onViewMore }) => {
  return (
    <section className="personal">
      <div className="section-header">
        <h2>Personal</h2>
        <button onClick={onViewMore} className="view-more-btn">
          Get to Know Me →
        </button>
      </div>
      <div className="personal-grid">
        <div className="personal-item interests">
          <h3>Interests & Hobbies</h3>
          <ul>
            <li>Photography</li>
            <li>Hiking & Nature</li>
            <li>Tech & Innovation</li>
          </ul>
        </div>
        <div className="personal-item values">
          <h3>Core Values</h3>
          <ul>
            <li>Continuous Learning</li>
            <li>Work-Life Balance</li>
            <li>Community Involvement</li>
          </ul>
        </div>
        <div className="personal-item achievements">
          <h3>Personal Achievements</h3>
          <ul>
            <li>Marathon Finisher</li>
            <li>Photography Exhibition</li>
            <li>Volunteer Work</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Personal;
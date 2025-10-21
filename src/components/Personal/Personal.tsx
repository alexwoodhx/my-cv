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
            <li>Live Music</li>
            <li>Online gaming</li>
            <li>Football</li>
          </ul>
        </div>
        <div className="personal-item values">
          <h3>Core Values</h3>
          <ul>
            <li>Continuous Learning</li>
            <li>Work-Life Balance</li>
            <li>Family Commitment</li>
          </ul>
        </div>
        <div className="personal-item achievements">
          <h3>Personal Achievements</h3>
          <ul>
            <li>Makers Skills Bootcamp</li>
            <li>Accessibility Programming Awards</li>
            <li>Various outside of work qualifications</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Personal;
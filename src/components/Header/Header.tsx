import React from 'react';
import './Header.css';

interface HeaderProps {
  onViewMore: () => void;
}

const Header: React.FC<HeaderProps> = ({ onViewMore }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-image-container">
          <img 
            src={process.env.PUBLIC_URL + '/alex-profile.jpg'} 
            alt="Alex's professional headshot" 
            className="profile-image"
          />
        </div>
        <div className="header-text">
          <h1>Alex Wood</h1>
          <h2>Software Engineer</h2>
          <div className="contact-info">
            <p>📧 alexanderdwood91@gmail.com</p>
            <p>📱 07739988534</p>
            <p>📍 South East England, UK</p>
            <p>🔗 LinkedIn: add link here</p>
          </div>
          <button onClick={onViewMore} className="view-more-btn">
            Learn More About Me →
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
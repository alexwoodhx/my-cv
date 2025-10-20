import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Your Name</h1>
      <h2>Your Title / Position</h2>
      <div className="contact-info">
        <p>📧 your.email@example.com</p>
        <p>📱 Your Phone Number</p>
        <p>📍 Your Location</p>
        <p>🔗 LinkedIn: linkedin.com/in/your-profile</p>
      </div>
    </header>
  );
};

export default Header;
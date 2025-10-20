import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-wrapper">
      <label className="theme-toggle">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          aria-label="Toggle dark mode"
        />
        <span className="slider">
          <span className="slider-indicator"></span>
        </span>
      </label>
      <span className="theme-label">Dark Mode</span>
    </div>
  );
};

export default ThemeToggle;
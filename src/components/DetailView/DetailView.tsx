import React from 'react';
import './DetailView.css';

export type DetailViewType = 'experience' | 'skills' | 'about' | 'personal';

interface DetailViewProps {
  type: DetailViewType;
  isOpen: boolean;
  onClose: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ type, isOpen, onClose }) => {
  return (
    <div className={`detail-view ${isOpen ? 'open' : ''}`}>
      <div className="detail-view-content">
        <button className="close-button" onClick={onClose}>
          <span>×</span>
        </button>
        {type === 'experience' && (
          <div className="detail-experience">
            <h2>Professional Experience</h2>
            {/* Add detailed experience content here */}
          </div>
        )}
        {type === 'skills' && (
          <div className="detail-skills">
            <h2>Technical Skills & Expertise</h2>
            {/* Add detailed skills content here */}
          </div>
        )}
        {type === 'about' && (
          <div className="detail-about">
            <h2>About Me</h2>
            {/* Add detailed about content here */}
          </div>
        )}
        {type === 'personal' && (
          <div className="detail-personal">
            <h2>Personal Life & Interests</h2>
            <div className="personal-details-grid">
              <section className="personal-detail-section">
                <h3>Interests & Hobbies</h3>
                <div className="personal-content">
                  <p>Beyond my professional life, I'm passionate about several activities that help me maintain creativity and balance:</p>
                  <ul>
                    <li>
                      <strong>Photography</strong>
                      <p>Specializing in landscape and street photography, with a particular focus on urban architecture and natural landscapes.</p>
                    </li>
                    <li>
                      <strong>Hiking & Nature</strong>
                      <p>Regular weekend hiker, exploring trails and documenting the journey through photography and journaling.</p>
                    </li>
                    <li>
                      <strong>Tech & Innovation</strong>
                      <p>Active participant in tech meetups and hackathons, always eager to explore emerging technologies.</p>
                    </li>
                  </ul>
                </div>
              </section>
              
              <section className="personal-detail-section">
                <h3>Values & Philosophy</h3>
                <div className="personal-content">
                  <p>My core values shape both my personal and professional approach:</p>
                  <ul>
                    <li>
                      <strong>Continuous Learning</strong>
                      <p>Committed to personal growth through reading, online courses, and hands-on experimentation.</p>
                    </li>
                    <li>
                      <strong>Work-Life Balance</strong>
                      <p>Advocate for maintaining a healthy balance between professional ambitions and personal well-being.</p>
                    </li>
                    <li>
                      <strong>Community Involvement</strong>
                      <p>Regular volunteer in local tech community events and mentorship programs.</p>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="personal-detail-section">
                <h3>Notable Achievements</h3>
                <div className="personal-content">
                  <ul>
                    <li>
                      <strong>Marathon Finisher</strong>
                      <p>Completed the London Marathon in 2024, raising funds for technology education initiatives.</p>
                    </li>
                    <li>
                      <strong>Photography Exhibition</strong>
                      <p>Hosted a solo photography exhibition featuring urban landscapes and architectural photography.</p>
                    </li>
                    <li>
                      <strong>Community Impact</strong>
                      <p>Led a successful coding workshop series for underprivileged youth in the local community.</p>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailView;
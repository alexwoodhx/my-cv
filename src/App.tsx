import React from 'react';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Personal from './components/Personal/Personal';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import DetailView from './components/DetailView/DetailView';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [activeDetail, setActiveDetail] = React.useState<'experience' | 'skills' | 'about' | 'personal' | null>(null);

  const handleOpenDetail = (type: 'experience' | 'skills' | 'about' | 'personal') => {
    setActiveDetail(type);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setActiveDetail(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <ThemeToggle />
      <Header onViewMore={() => handleOpenDetail('about')} />
      <main>
        <Experience onViewMore={() => handleOpenDetail('experience')} />
        <Skills onViewMore={() => handleOpenDetail('skills')} />
        <Personal onViewMore={() => handleOpenDetail('personal')} />
      </main>
      <DetailView
        type={activeDetail || 'about'}
        isOpen={activeDetail !== null}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

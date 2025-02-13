// import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useTheme } from './context/ThemeContext';
import './styles/themes.css';

const AppContent = () => {
  const { theme, colorScheme } = useTheme();
  console.log("Current theme:", theme);
  console.log("Current color scheme:", colorScheme);
  
  return (
    <div className={`theme-${theme} color-${colorScheme}`}>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500">
        <Navigation />
        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import RedFlagsPage from './pages/RedFlagsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div id="home">
          <HomePage />
        </div>
        <div id="dashboard">
          <DashboardPage />
        </div>
        <div id="red-flags">
          <RedFlagsPage />
        </div>
        <div id="about">
          <AboutPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
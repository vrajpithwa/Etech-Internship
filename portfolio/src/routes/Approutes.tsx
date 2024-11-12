import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Projects from '../pages/Projects';
import App from '../App';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default AppRoutes;

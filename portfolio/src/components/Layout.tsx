import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Projects from "../pages/Projects";
import Header from "./Header";
import Game from "./Game";
import TechStack from "./TechStack";
import HostedWebsitesPage from "./HostedWeb";

const Layout = () => {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/vraj" replace />} />
        <Route path="/vraj" element={<MainPage />} />
        <Route path="/vraj/projects" element={<Projects />} />
        <Route path="/vraj/skills" element={<TechStack />} />
        <Route path="/vraj/game" element={<Game />} />
        <Route path="/vraj/live_projects" element={<HostedWebsitesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;

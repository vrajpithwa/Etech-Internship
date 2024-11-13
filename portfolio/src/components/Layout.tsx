import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Projects from "../pages/Projects";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "../theme/theme";
import Header from "./Header";
import Game from "./Game";
import TechStack from "./TechStack";
import HostedWebsitesPage from "./HostedWeb";

const Layout = () => {
  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/vraj" replace />} />
          <Route path="/vraj" element={<MainPage />} />
          <Route path="/vraj/projects" element={<Projects />} />
          <Route path="/vraj/skills" element={<TechStack />} />
          <Route path="/vraj/game" element={<Game />} />
          <Route path="/vraj/live_projects" element={< HostedWebsitesPage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
};

export default Layout;

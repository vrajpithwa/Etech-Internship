import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Projects from "../pages/Projects";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "../theme/theme";
import Header from "./Header";
import Game from "./Game";

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
          <Route path="/vraj/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
};

export default Layout;

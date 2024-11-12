// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "./theme/theme";
import Header from "./components/Header";
import Layout from "./components/Layout";


const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
  <Layout/>
  </ThemeProvider>
  );
};

export default App;

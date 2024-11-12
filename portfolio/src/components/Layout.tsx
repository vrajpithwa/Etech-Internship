import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Projects from "../pages/Projects";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "../theme/theme";
import Header from "./Header";

const Layout = () => {
    return(
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
  <BrowserRouter>
  <Header/>
		<Routes>
			<Route path="/" element={<MainPage/>} />
			<Route path="/projects" element={<Projects />} />
		</Routes>
	</BrowserRouter>

  </ThemeProvider>
    );
}

export default Layout;
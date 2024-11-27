import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Projects from "../pages/Projects";
import Header from "./Header";
import Game from "./Game";
import TechStack from "./TechStack";
import HostedWebsitesPage from "./HostedWeb";
import Datagrid from "./DataGrid";
import ErrorDataGrid from "./ErrorDataGrid";
// import UserDetails from "./User";



const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/vraj" replace />} />
        <Route path="/vraj" element={<MainPage />} />
        <Route path="/vraj/projects" element={<Projects />} />
        <Route path="/vraj/skills" element={<TechStack />} />
        <Route path="/vraj/game" element={<Game />} />
        <Route path="/vraj/live_projects" element={<HostedWebsitesPage />} />
        <Route path="/vraj/datagrid" element={<Datagrid />} />
        <Route path="/vraj/error" element={<ErrorDataGrid/>} />
        {/* <Route path="/vraj/users" element={<UserDetails/>} /> */}

      </Routes>
    </Router>
  );
};

export default Layout;

import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "./theme/theme";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
};

export default App;

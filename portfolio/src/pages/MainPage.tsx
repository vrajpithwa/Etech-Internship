import React from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import darkTheme from "../theme/theme";

import Hero from "../components/Hero";
import FloatingImageComponent from "../components/floatingImg";

const MainPage: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg" disableGutters>
          <Hero />
        </Container>
        <FloatingImageComponent />
      </ThemeProvider>
    </>
  );
};

export default MainPage;

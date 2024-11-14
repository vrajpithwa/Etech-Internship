import React from "react";
import { Container } from "@mui/material";
import Hero from "../components/Hero";
import FloatingImageComponent from "../components/floatingImg";

const MainPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg" disableGutters>
        <Hero />
      </Container>
      <FloatingImageComponent />
    </>
  );
};

export default MainPage;

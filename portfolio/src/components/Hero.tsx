// src/components/Hero.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import cornerImg from '../assets/bg3.png';
import cornerImg2 from '../assets/bg2.png';

// Style the container to have an image in the corner and overlay elements on top
const HeroContainer = styled(Box)({
  position: "relative",
  height: "100vh",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden",
  backgroundColor: "#121212",
});

// Positioned background image in the corner
const CornerImage = styled("img")({
  position: "absolute",
  top: 100,
  left: 0,
  width: "100%", // adjust width as per your requirement
  height: "60%",
  opacity: 0.2, // make it faint to not distract from main content
  zIndex: 1,
});

// Content overlay on top of the background
const Content = styled(Box)({
  position: "relative",
  zIndex: 2, // higher z-index to keep it above the image
});

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <CornerImage src={cornerImg} alt="Corner Background Image" />
      <CornerImage src={cornerImg2} alt="Corner Background Image" />
      <Content>
        <Typography variant="h5" color="secondary">
          Welcome to my Portfolio
        </Typography>
        <Typography variant="h1" sx={{ my: 2 }}>
          Hi! I'm Vraj Pithwa
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          I am an aspiring ICT student passionate about software, eager to learn and gain hands-on experience with modern tech.
        </Typography>
        <Button variant="contained" color="secondary">
  <a
    href="https://www.linkedin.com/in/vrajpithwa"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      textDecoration: "none",
      color: "inherit",
    }}
  >
    Let’s Connect on linkedin
  </a>
</Button>

      </Content>
      
    </HeroContainer>
  );
};

export default Hero;

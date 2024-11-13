// src/components/Hero.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import cornerImg from '../assets/bg3.png';
import cornerImg2 from '../assets/bg2.png';
import Typewriter from 'typewriter-effect';

// Create a separate container for the blur effect
const BlurBackground = styled(Box)({
  position: 'unset',
  top: 0,
  left: 0,
  width: "500px",
  height: "30%",
  backgroundColor: 'rgb(138, 43, 226)',
  filter: 'blur(100px)',
  opacity: '0.3',
  zIndex: 2,
});


const HeroContainer = styled(Box)({
  position: "relative",
  height: "100vh",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden",
  zIndex: 1,
});

const CornerImage = styled("img")({
  position: "absolute",
  top: 100,
  left: 0,
  width: "100%",
  height: "60%",
  opacity: 0.2,
  zIndex: 2,
});

const Content = styled(Box)({
  position: "absolute",
  zIndex: 3, // Increased z-index to be above both blur and corner image
});

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <BlurBackground /> 
      {/* <CornerImage src={cornerImg} alt="background" /> */}
      <Content>
        <Typography variant="h5" color="secondary" sx={{ marginRight: 2 }}>
          Welcome to my Portfolio
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h1">
            Hi! I'm 
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginLeft: 20,
              background: 'linear-gradient(45deg,#ff69b4,#da70d6,#9370db,#87cefa)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Vraj Pithwa
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          Software,
          <Typewriter
            options={{
              strings: ['Software Developer', 'gain hands-on experience with modern tech.'],
              autoStart: true,
              loop: true,
            }}
          />
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
            Let's Connect on linkedin
          </a>
        </Button>
      </Content>

    </HeroContainer>
  );
};

export default Hero;
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
  alignItems: 'center'
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
        <div style={{display: "flex", justifyContent: "center"}}>
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
          </div>
        <Typography variant="h6" sx={{ mx: "auto", marginRight:1}}>
  Aspiring software developer with hands-on experience in developing, testing, and maintaining projects using modern technologies.
    </Typography>

  <Typewriter
    options={{
      strings: [ "Passionate Web Developer",
        "Frontend Engineer",
        "Full Stack Developer",
        "UI/UX Enthusiast",
        "Mobile App Developer",
        "Tech Innovation Explorer",
        "AI & ML Enthusiast"],
      autoStart: true,
      loop: true,
    }}
  />
  
<br></br>

      </Content>

            
    </HeroContainer>
  );
};

export default Hero;
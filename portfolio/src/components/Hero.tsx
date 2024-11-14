// src/components/Hero.tsx
import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import cornerImg from '../assets/bg3.png';
import Typewriter from 'typewriter-effect';

// Create a separate container for the blur effect

const BlurBackground = styled(Box)({
  position: 'absolute',
  // top: 0,
  // left: 0,
  width: "40%",
  height: "13%",
  // backgroundColor: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(138, 43, 226)',
  filter: 'blur(100px)',
  opacity: '0.7',
  zIndex: 2,
});

const HeroContainer = styled(Box)({
  position: "relative",
  minHeight: "100vh", // Changed from fixed height to minHeight
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden",
  zIndex: 1,
  padding: "20px", // Added padding for mobile
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

const Content = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 3,
  width: "100%",
  maxWidth: "1200px", // Added max-width for large screens
  padding: "0 20px", // Added horizontal padding
}));

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <HeroContainer>
      <BlurBackground />
      <Content>
        <Typography 
          variant={isMobile ? "h6" : "h5"} 
          color="secondary" 
          sx={{ 
            marginBottom: { xs: 2, sm: 3 },
            fontSize: {
              xs: '1rem',     // Mobile
              sm: '1.25rem',  // Tablet
              md: '1.5rem'    // Desktop
            }
          }}
        >
          Welcome to my Portfolio
        </Typography>

        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on tablet+
          justifyContent: "center",
          alignItems: { xs: 'center', sm: 'baseline' },
          gap: { xs: 1, sm: 2 }
        }}>
          <Typography 
            variant="h1"
            sx={{
              fontSize: {
                xs: '2.5rem',  // Mobile
                sm: '3.5rem',  // Tablet
                md: '5.5rem'   // Desktop
              }
            }}
          >
            Hi! I'm
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '2.5rem',  // Mobile
                sm: '3.5rem',  // Tablet
                md: '5.5rem'   // Desktop
              },
              marginLeft: { xs: 0, sm: 2 },
              background: 'linear-gradient(45deg,#ff69b4,#da70d6,#9370db,#87cefa)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Vraj Pithwa
          </Typography>
        </Box>

        <Typography 
          variant="h6" 
          sx={{ 
            mx: "auto",
            marginTop: { xs: 2, sm: 3 },
            marginBottom: { xs: 2, sm: 3 },
            maxWidth: { xs: '100%', sm: '80%', md: '70%' },
            fontSize: {
              xs: '0.875rem',  // Mobile
              sm: '1rem',      // Tablet
              md: '1.25rem'    // Desktop
            }
          }}
        >
          Aspiring software developer with hands-on experience in developing, testing, and maintaining projects using modern technologies.
        </Typography>

        <Box sx={{ 
          '& .Typewriter': { 
            fontSize: {
              xs: '1rem',      // Mobile
              sm: '1.25rem',   // Tablet
              md: '1.5rem'     // Desktop
            }
          }
        }}>
          <Typewriter
            options={{
              strings: [
                "Passionate Web Developer",
                "Frontend Engineer",
                "Full Stack Developer",
                "UI/UX Enthusiast",
                "Mobile App Developer",
                "Tech Innovation Explorer",
                "AI & ML Enthusiast"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
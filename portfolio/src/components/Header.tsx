import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import { YouTube } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigator = useNavigate();
  const handleProjectsClick = () => {
    navigator("/vraj/projects"); // Navigate to the Projects page
  };
  const handleHomeClick = () => {
    navigator("/vraj"); // Navigate to the Projects page
  };
  const handleSkillClick = () => {
    navigator("/vraj/skills"); // Navigate to the Projects page
  }
  const handleLiveClick = () => {
    navigator("/vraj/live_projects"); // Navigate to the Projects page
  }
  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ zIndex: 3, top: 0 }} // Ensures it overlays on the image
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Vraj's Portfolio
        </Typography>
        <Button onClick={handleHomeClick} color="inherit">
          Home
        </Button>
        <Button onClick={handleSkillClick} color="inherit">Skills</Button>
        <Button onClick={handleProjectsClick} color="inherit">
          Projects
        </Button>
        <Button onClick={handleLiveClick} color="inherit" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px', // Space between text and dot
        }}
      >
        Live Projects
        <Box
          sx={{
            width: 8,
            height: 8,
            backgroundColor: 'red',
            borderRadius: '50%',
            animation: 'blinker 1.5s cubic-bezier(0.66, 0, 0.13, 1) infinite',
            '@keyframes blinker': {
              '0%': { opacity: 1 },
              '50%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
          }}
        />
      </Box>
    </Button>
        <Box sx={{ ml: 2 }}>
          <IconButton color="inherit" href="https://linkedin.com/in/vrajpithwa">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://github.com/vrajpithwa">
            <GitHub></GitHub>
          </IconButton>
          <IconButton color="inherit" href="#">
            <YouTube />
          </IconButton>
          <IconButton color="inherit" href="#">
            <LanguageIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

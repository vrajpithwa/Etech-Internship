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
        <Button color="inherit">Skills</Button>
        <Button onClick={handleProjectsClick} color="inherit">
          Projects
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

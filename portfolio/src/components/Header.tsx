import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListItemButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { 
  GitHub, 
  Mail, 
  Menu as MenuIcon,
  Home,
  Code,
  LiveTv,
  Construction,
  Close
} from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
import { MailOutlineOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigator = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { text: 'Home', path: '/vraj', icon: <Home /> },
    { text: 'Skills', path: '/vraj/skills', icon: <Construction /> },
    { text: 'Projects', path: '/vraj/projects', icon: <Code /> },
    { text: 'Live Projects', path: '/vraj/live_projects', icon: <LiveTv /> },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/vrajpithwa', label: 'LinkedIn' },
    { icon: <GitHub />, url: 'https://github.com/vrajpithwa', label: 'GitHub' },
    { icon: <YouTube />, url: 'https://www.youtube.com/@vrajpithwa', label: 'YouTube' },
    { icon: <MailOutlineOutlined />, url: 'mailto:vraj.pithwa.in@gmail.com', label: 'Email' },
  ];

  const handleNavigation = (path: string) => {
    navigator(path);
    if (isMobile) {
      handleDrawerToggle();
    }
  };

  const LiveDot = () => (
    <Box
      sx={{
        width: 8,
        height: 8,
        backgroundColor: 'red',
        borderRadius: '50%',
        ml: 1,
        animation: 'blinker 1.5s cubic-bezier(0.66, 0, 0.13, 1) infinite',
        '@keyframes blinker': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }}
    />
  );

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6">Menu</Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'inherit' }}>
          <Close />
        </IconButton>
      </Box>
      <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)' }} />
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
              {item.text === 'Live Projects' && <LiveDot />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)' }} />
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.7 }}>
          Connect
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-around',
          '& .MuiIconButton-root': {
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)'
            }
          }
        }}>
          {socialLinks.map((link) => (
            <IconButton
              key={link.label}
              color="inherit"
              href={link.url}
              size="small"
              aria-label={link.label}
            >
              {link.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ zIndex: 1200, top: 0 }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
            fontWeight: 500
          }}
        >
          Vraj's Portfolio
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {item.text}
                  {item.text === 'Live Projects' && <LiveDot />}
                </Button>
              ))}
            </Box>
            <Box sx={{ 
              ml: 2, 
              display: 'flex', 
              gap: 1,
              borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
              pl: 2
            }}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.label}
                  color="inherit"
                  href={link.url}
                  size="small"
                  aria-label={link.label}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: 250,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            backdropFilter: 'blur(10px)'
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
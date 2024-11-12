// HomePage.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const HomePage = () => (
  <Container
    sx={{
      backgroundColor: 'background.paper',
      padding: 4,
      borderRadius: 2,
      boxShadow: 1,
    }}
  >
    <Typography
      variant="h1"
      sx={{
        background: 'linear-gradient(45deg, #ff00aa, #6a00ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      gutterBottom >
      This is the gradient effect
    </Typography>

    <Typography variant="h2" color="text.secondary" paragraph>
      h2 styling
    </Typography>

    <Typography variant="h3" color="text.secondary" paragraph>
      h3 Styling
    </Typography>

    <Button variant="contained" color="primary">
      Primary
    </Button>

    <Button variant="contained" color="secondary">
      secondary
    </Button>
  </Container>
);

export default HomePage;

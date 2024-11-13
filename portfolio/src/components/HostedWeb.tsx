import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import kp from '../assets/kp.svg';
import svdjgt from '../assets/svdjgt.png';
import pct from '../assets/pct.jpeg';


interface Website {
  title: string;
  imgUrl: string;
  description: string;
  link: string;
}

const websites: Website[] = [
  {
    title: "Charity Platform",
    description: "A platform that facilitates transparent charitable donations, built with secure payment integration.",
    imgUrl: svdjgt, 
    link: "https://shreevachchhrajdadajivdayagausevatrust.com/",
  },
  {
    title: "Graphic Design and Printing WebApp",
    imgUrl: kp,
    description: "Professional Designing, Uniqueness, Digital Prining",
    link: "https://ketanpithva.com",
  },
  {
    title: "Pithwa Charitable trust",
    imgUrl: pct,
    description: "Trust which aim's to help people who are in-need",
    link: "https://pithwacharitabletrust.org",
  },
  // Add more websites as needed
];

const WebsiteCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: '15px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',

  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
}));

const HostedWebsitesPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "80px", paddingBottom: "40px" }}>
      <Typography variant="h2" align="center" gutterBottom>
Live Projects
      </Typography>
      <Grid container spacing={4}>
        {websites.map((website, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WebsiteCard>
            <CardMedia
                component="img"
                height="200"
                image={website.imgUrl}
                alt={website.title}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {website.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {website.description}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography 
                  variant="body2" 
                  color="primary" 
                  component="a" 
                  href={website.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ textDecoration: 'none', fontWeight: 'bold' }}
                >
                  Visit Website
                </Typography>
              </CardContent>
            </WebsiteCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};




export default HostedWebsitesPage;

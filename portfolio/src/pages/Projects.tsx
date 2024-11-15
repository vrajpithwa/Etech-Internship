import React from 'react';
import { Container, Grid, Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useNavigate } from "react-router-dom";
import theme from '../theme/theme';


interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Skill Share Connect WebApp",
    description: "It empower individuals to connect, share expertise, and learn from one another in a seamless and engaging manner, WebApp. ",
    technologies: ["React", "Node", "Bootstrap"],
    link: "https://github.com/vrajpithwa/Skill_Share_Conncet_Webapp",
  },
  {
    title: "Skill Share Connect MobileApp",
    description: "It empower individuals to connect, share expertise, and learn from one another in a seamless and engaging manner, Cross platform mobile app. ",
    technologies: ["Flutter", "firebase"],
    link: "https://github.com/vrajpithwa/Skill_Share_Connect_MobileApp",
  },
  {
    title: "Segment Anything and Replace",
    description: "Leveraged advanced image processing techniques to accurately isolate individuals and seamlessly integrate new backgrounds. ",
    technologies: ["Python", "Javascript"],
    link: "https://github.com/vrajpithwa/Segment_and_Replace_Backgroung",
  }, 
  {
    title: "Smart Kisan Mitra",
    description: "Enhancing farmers efficiency and productivity. Developing a user-friendly application and hardware to provide remote access to water pumps for farmers ",
    technologies: ["Flutter", "firebase"],
    link: "https://github.com/vrajpithwa/Smart-Kisan-Mitra",
  },
  {
    title: "Youtube Transcript Summarizer ©",
    description: " Revolutionizing Video Consumption with Intelligent Summarization Developed an innovative Project that transforms lengthy video content into concise, digestible text overviews.",
    technologies: ["Python", "Javascript"],
    link: "https://github.com/vrajpithwa/YouTube-Transcript-Summarizer-main",
  },
];

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',

  }
}));

const Projects: React.FC = () => {
  const navigator = useNavigate();
  const handleGameClick = () => {
    navigator("/vraj/game"); // Navigate to the Projects page
  };
  return (
    
    <Container maxWidth="lg" sx={{ paddingTop: "80px"}}>
      <Typography variant="h2" align="center" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard>
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ margin: "1rem 0" }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </Button>
              </CardActions>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
      {/* <Container sx={{justifyContent:'center', width:'100%', display: 'flex', marginTop: '10%'}}>
      <Button  variant='contained' onClick={handleGameClick}  style={{marginTop:70, borderRadius: '50px',  backgroundColor: theme.palette.primary.light,}}>
      Play Game!
      <IconButton color="inherit" onClick={handleGameClick}>
      <SportsEsportsIcon></SportsEsportsIcon>
      </IconButton>
      </Button >
      </Container> */}
      <IconButton
          
        onClick={handleGameClick}
         sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          borderRadius: '50%',
          padding: 1,
          backgroundColor: 'primary.light',
          color: "black",
          boxShadow: 3,
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}>
        <SportsEsportsIcon />
        </IconButton>
    </Container>
  );
};

export default Projects;

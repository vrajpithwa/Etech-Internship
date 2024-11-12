import React from 'react';
import { Container, Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

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
    technologies: ["Flutter", "firebase"],
    link: "https://github.com/vrajpithwa/Segment_and_Replace_Backgroung",
  },
];

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const Projects: React.FC = () => {
  return (
    
    <Container maxWidth="lg" sx={{ padding: "2rem 0" }}>
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
    </Container>
  );
};

export default Projects;

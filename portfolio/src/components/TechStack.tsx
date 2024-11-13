import React from "react";
import { Box, Typography, Paper, Grid, Grid2, Container } from "@mui/material";
import styled from "@emotion/styled";
// MUI Icons
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import CreateIcon from '@mui/icons-material/Create';
// import NetworkCheckIcon from '@mui/icons-material/NetworkCheck'; // Updated icon
import { Terminal } from "@mui/icons-material";
import CodeIcon from '@mui/icons-material/Code';

// Correct the type for icon prop to SvgIconComponent
import { SvgIconComponent } from '@mui/icons-material';

const StyledPaper = styled(Paper)({
  padding: "2rem",
  backgroundColor: 'rgb(7, 7, 7)',
//   backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#fff',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
});

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: SvgIconComponent; // Updated icon type to SvgIconComponent
}

interface SkillSection {
  title: string;
  icon: SvgIconComponent; // Updated icon type to SvgIconComponent
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon: Icon }) => (
  <StyledPaper elevation={3}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Icon sx={{ marginRight: '10px', color: '#ff69b4', fontSize: 24 }} />
      <Typography variant="h4" sx={{
        background: 'linear-gradient(45deg, #ff6666, #da70d6)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }}>
        {title}
      </Typography>
    </Box>
    <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
      {skills.map((skill, index) => (
        <Box
          component="li"
          key={index}
          sx={{
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            '&:before': {
              content: '"▹"',
              color: '#9969ff',
              marginRight: '10px'
            }
          }}
        >
          {skill}
        </Box>
      ))}
    </Box>
  </StyledPaper>
);

const TechStack: React.FC = () => {
  const skillSections: SkillSection[] = [
    {
      title: "Frontend Development",
      icon: CodeIcon,
      skills: [
        "React & Redux",
        "TypeScript/JavaScript",
        "HTML5 & CSS3/SCSS",
        "Material UI/Tailwind",
        "Flutter & Dart",
        "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      icon: Terminal, // Updated icon
      skills: [
        "Node.js & Express",
        "Python & Django",
        "Java & Spring Boot",
        "RESTful APIs",
        "PHP & Laravel",
        "Microservices"
      ]
    },
    {
      title: "Database & Cloud",
      icon: StorageIcon,
      skills: [
        "MySQL & PostgreSQL",
        "MongoDB & Firebase",
        "Redis Caching",
        "AWS Services",
        "Docker & Kubernetes",
        "CI/CD Pipelines"
      ]
    },
    {
      title: "Design & Tools",
      icon: BrushIcon,
      skills: [
        "Figma & Adobe XD",
        "Adobe Photoshop",
        "Adobe After Effects",
        "Adobe Premiere Pro",
        "CorelDraw",
        "UI/UX Design"
      ]
    },
    {
      title: "Development Tools",
      icon: CreateIcon,
      skills: [
        "Git & GitHub",
        "VS Code & IntelliJ",
        "Postman & Swagger",
        "Jira & Trello",
        "Linux & Shell",
        "PyCharm & Xcode"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "80px" }}>
    
      <Typography
        variant="h2"
        align="center"
        sx={{
          mb: 6,
          background: 'white',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}
      >
        Tech Stack
      </Typography>
      <Grid container spacing={4}>
        {skillSections.map((section, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <SkillCard
              title={section.title}
              skills={section.skills}
              icon={section.icon}
            />
          </Grid>
        ))}
      </Grid>
   
    </Container>
  );
};

export default TechStack;

import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#2d19ae',
        },
        secondary: {
            main: '#dc187a',
        },
        background: {
            default: '#f7f7f7',
            paper: '#f6f6f6',
        },
        text: {
            primary: '#333333',
            secondary: '#555555',
        },
    },
    typography:{
            fontFamily: 'Arial, sans-serif',
            h1: {fontSize: '50px', fontWeight: 700},
            h2: {fontSize: '30px', fontWeight: 700},
            h3: {fontSize: '20px', fontWeight: 600},

        },
    spacing: 10,
    
});

export default theme;
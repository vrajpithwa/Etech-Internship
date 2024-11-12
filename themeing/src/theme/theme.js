import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3498db',
        },
        secondary: {
            main: '#2ecc71',
        },
        background: {
            default: '#f7f7f7',
            paper: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#555555',
        },
    },
    typography:{
            fontFamily: 'Arial, sans-serif',
            h1: {fontSize: '10px', fontWeight: 700},
            h2: {fontSize: '9px', fontWeight: 700},
            h3: {fontSize: '8px', fontWeight: 400},

        },
        spacing: 10,
    
});

export default theme;
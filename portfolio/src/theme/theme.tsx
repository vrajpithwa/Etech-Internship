// src/theme.ts
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    // main: "#8f92f4"
    },
    text: {
      primary: "#ffffff",
      secondary: "#a0a0a0",
    },
  },
  typography: {
    fontFamily: "system-ui",
    fontSize: 14,
    fontWeightBold: 1000,
    h1:{
        fontFamily: 'system-ui',
        fontSize: 88,
        fontWeight: 900,
    },
    h2:{
        fontSize: 60,
        fontWeight: 800,

    },
    h5:{
        fontSize: 18,
        fontWeight: 1000
    },
    body1:{
        fontSize: 19,
        fontWeight: 1000
    },
  },

});

export default darkTheme;

// import React, { useEffect } from "react";
// import { ThemeProvider, CssBaseline } from "@mui/material";
// import darkTheme from "./theme/theme";
// import Layout from "./components/Layout";

import React, { useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { SnackbarProvider } from 'notistack';
import darkTheme from "./theme/theme";
import Layout from "./components/Layout";
import { errorHandler } from './components/ErrorHandler';
import { useSnackbar } from 'notistack';

// Error handler setup component
const ErrorHandlerSetup: React.FC = ()  => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    errorHandler.setOptions({
      showNotification: (message) => enqueueSnackbar(message, { 
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      })
    });
  }, [enqueueSnackbar]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SnackbarProvider 
        preventDuplicate
        dense
      >
        <ErrorHandlerSetup />
        <Layout />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
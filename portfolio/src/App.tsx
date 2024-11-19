import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "./theme/theme";
import Layout from "./components/Layout";
import { SnackbarProvider } from "notistack";
import ErrorHandlerSetup from "./components/ErrorHandlerSetup";
import ErrorDialog from "./components/ErrorDialog";

interface ErrorData {
  message: string;
  stack?: string;
  [key: string]: any;
}

const App: React.FC = () => {
  const [errorDetails, setErrorDetails] = useState<ErrorData | null>(null);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState<boolean>(false);

  const handleCloseErrorDialog = (): void => {
    setIsErrorDialogOpen(false);
    setErrorDetails(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SnackbarProvider
        
        maxSnack={1}
        dense
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <ErrorHandlerSetup
          setErrorDetails={setErrorDetails}
          setIsErrorDialogOpen={setIsErrorDialogOpen}
        />
        <Layout />

        <ErrorDialog
          open={isErrorDialogOpen}
          onClose={handleCloseErrorDialog}
          error={errorDetails}
        />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;

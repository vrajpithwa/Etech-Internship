// src/components/SnackbarProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import { 
  SnackbarProvider as NotistackProvider, 
  useSnackbar as useNotistack, 
  VariantType, 
  SnackbarKey 
} from 'notistack';
import { Button } from '@mui/material';
import ErrorDialog from './ErrorDialog';
interface ErrorData {
  id: number;
  message: string;
  stack: string;
  timestamp?: string;
}

interface SnackbarContextType {
  showSnackbar: (message: string, variant?: VariantType, errorData?: ErrorData) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

interface SnackbarProviderProps {
  children: React.ReactNode;
  maxSnack?: number;
}

export const Snackbarprovider: React.FC<SnackbarProviderProps> = ({ 
  children, 
  maxSnack = 3 
}) => {
  const { enqueueSnackbar, closeSnackbar } = useNotistack();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedError, setSelectedError] = useState<ErrorData | null>(null);

  const showSnackbar = (message: string, variant: VariantType = 'error', errorData?: ErrorData) => {
    enqueueSnackbar(message, { 
      variant,
      autoHideDuration: 6000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      action: (snackbarKey) => (
        <>
          {errorData && (
            <Button 
              onClick={() => {
                closeSnackbar(snackbarKey);
                setSelectedError(errorData);
                setDialogOpen(true);
              }}
              size="small"
              style={{ color: 'white', marginRight: '8px' }}
            >
              Read More
            </Button>
          )}
          <Button 
            onClick={() => closeSnackbar(snackbarKey)}
            size="small"
            style={{ color: 'white' }}
          >
            Dismiss
          </Button>
        </>
      ),
    });
  };

  return (
    <NotistackProvider 
      maxSnack={maxSnack}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <SnackbarContext.Provider value={{ showSnackbar }}>
        {children}
        <ErrorDialog
          error={selectedError}
          open={dialogOpen}
          onClose={() => {
            setDialogOpen(false);
            setSelectedError(null);
          }}
        />

      </SnackbarContext.Provider>
    </NotistackProvider>
  );
};
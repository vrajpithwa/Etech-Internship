// src/components/ErrorDialog.tsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Paper,
} from '@mui/material';
interface ErrorData {
  id: number;
  message: string;
  stack: string;
  timestamp?: string;
}

interface ErrorDialogProps {
  error: ErrorData | null;
  open: boolean;
  onClose: () => void;
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({ error, open, onClose }) => {
  if (!error) return null;

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: { 
          backgroundColor: '#1e1e1e', 
          color: 'white' 
        }
      }}
    >
      <DialogTitle>Error Details</DialogTitle>
      <DialogContent>
        <div className="space-y-4">
          <div>
            <Typography variant="subtitle2" color="textSecondary">
              Error Message
            </Typography>
            <Typography color="textPrimary">{error.message}</Typography>
          </div>
          
          <div>
            <Typography variant="subtitle2" color="textSecondary">
              Timestamp
            </Typography>
            <Typography color="textPrimary">
              {new Date(error.timestamp || '').toLocaleString()}
            </Typography>
          </div>
          
          <div>
            <Typography variant="subtitle2" color="textSecondary">
              Stack Trace
            </Typography>
            <Paper 
              variant="outlined"
              style={{ 
                backgroundColor: '#2c2c2c', 
                padding: '16px', 
                maxHeight: '300px', 
                overflowY: 'auto' 
              }}
            >
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                wordBreak: 'break-word',
                margin: 0,
                color: '#e0e0e0'
              }}>
                {error.stack}
              </pre>
            </Paper>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
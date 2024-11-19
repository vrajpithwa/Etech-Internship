import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Alert,
  Paper,
  Tooltip,
  DialogProps
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface ErrorData {
  message: string;
  stack?: string;
  [key: string]: any;
}

interface ErrorDialogProps {
  open: boolean;
  onClose: () => void;
  error: ErrorData | null;
  title?: string;
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({ 
  open, 
  onClose, 
  error,
  title = "Error Details"
}: ErrorDialogProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = async (): Promise<void> => {
    if (!error) return;
    
    try {
      const errorText = `Error: ${error.message}\n\nStack Trace:\n${error.stack}`;
      await navigator.clipboard.writeText(errorText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy error details:", err);
    }
  };

  if (!error) return null;

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          minHeight: '300px'
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 1
      }}>
        <Typography variant="h6">{title}</Typography>
        {/* <IconButton 
          onClick={onClose}
          size="small"
          aria-label="close"
        >
          <CloseIcon />
        </IconButton> */}
      </DialogTitle>

      <DialogContent sx={{ pt: 1 }}>
        <Alert 
          severity="error" 
          sx={{ mb: 3 }}
        >
          {error.message}
        </Alert>

        {error.stack && (
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <Typography variant="subtitle2">Stack Trace</Typography>
              <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={copied ? <CheckCircleIcon /> : <ContentCopyIcon />}
                  onClick={copyToClipboard}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </Tooltip>
            </div>
            
            <Paper 
              variant="outlined" 
              sx={{ 
            
                p: 2,
                maxHeight: '300px',
                overflow: 'auto'
              }}
            >
              <pre style={{ margin: 0, fontSize: '0.875rem' }}>
                <code>{error.stack}</code>
              </pre>
            </Paper>
          </div>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
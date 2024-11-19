import React, { useEffect } from "react";
import { useSnackbar, VariantType } from "notistack";
import { Button } from "@mui/material";
import { errorHandler } from "./ErrorHandler";

interface ErrorHandlerSetupProps {
  setErrorDetails: React.Dispatch<React.SetStateAction<any>>;
  setIsErrorDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ErrorHandlerSetup: React.FC<ErrorHandlerSetupProps> = ({
  setErrorDetails,
  setIsErrorDialogOpen,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    errorHandler.setOptions({
      showNotification: (message: string, error: any): void => {
        enqueueSnackbar(
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              width: "100%",
            }}
          >
            <span>{message}</span>
            <Button
              sx={{ textTransform: "none", color: "yellow", fontWeight: 600 }}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {    
                e.preventDefault();
                e.stopPropagation();
                setErrorDetails(error);
                setIsErrorDialogOpen(true);
              }}
            >
            View Error
            </Button>
          </div>,
          {
            variant: "error" as VariantType,
            preventDuplicate: true,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
            autoHideDuration: 6000,
          }
        );
      },
    });
  }, [enqueueSnackbar, setErrorDetails, setIsErrorDialogOpen]);

  return null;
};

export default ErrorHandlerSetup;

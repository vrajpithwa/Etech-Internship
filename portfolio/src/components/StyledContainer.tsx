// components/CustomContainer.tsx
import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface CustomContainerProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>; // Allows passing additional styles as props
  maxWidth?: string | number; // Optionally override maxWidth
  maxHeight?: string | number;
}

const CustomContainer: React.FC<CustomContainerProps> = ({
  children,
  sx,
//   maxWidth = 'lg', // Default MUI size 'lg'
//   maxHeight = '10',
}) => {
  return (
    <Box
      sx={{
        // maxWidth: maxWidth,
        // maxHeight: maxHeight,
        mx: 'auto', // Center the container horizontally
        px: 1,      // Horizontal padding
        py: 4,      // Vertical padding
        // border: 1,
        borderRadius: 3,
        background: 'radial-gradient(circle, #000000 10%, #002e39 90%)', 
        boxShadow: 10,
        ...sx,      // Merge any additional styles passed via sx prop
      }}
    >
      {children}
    </Box>
  );
};

export default CustomContainer;

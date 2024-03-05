import React from 'react';
import Box from '@mui/material/Box';
import NextButton from '../button/nextButton';
import BackButton from '../button/backButton';

const EndCase = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ position: 'absolute', bottom: '16px', left: '16px' }}>
        <BackButton />
      </div>
      <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
        <NextButton />
      </div>
      <h1 style={{ color: 'red' }}>End</h1>
    </Box>
  );
};

export default EndCase;

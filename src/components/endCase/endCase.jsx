import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CaseViewContextProvider } from '../../context/casesView.context';

const EndCase = ({prevPage, initialPage}) => {
  const { navigate } = useContext(
    CaseViewContextProvider
);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
      }}
    >
      <h1 style={{ color: 'red' }}>End</h1>
      <div style={{ display: "flex", justifyContent: "space-between", margin: '1rem', width: '100%' }}>
        <Button
          startIcon={<ArrowBackIosNewIcon
            sx={{ color: 'yellow' }}
            fontSize='large' />}
            onClick={() => navigate(prevPage)}
        >Back</Button>

        <Link to="/">
        <Button
          endIcon={<ArrowForwardIosIcon
            sx={{ color: 'yellow' }}
            fontSize='large' />}
            onClick={() => navigate(initialPage)}
        >Next</Button>
        </Link>
      </div>
    </Box>
  );
};

export default EndCase;

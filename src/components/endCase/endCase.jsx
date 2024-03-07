import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CaseViewContextProvider } from '../../context/casesView.context';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const EndCase = ({ prevPage, initialPage }) => {
  const { navigate } = useContext(CaseViewContextProvider);

  return (
    <><div style={{
      width: '100%',
      height: '91vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}>
      <h1 style={{ color: 'red',fontSize:"5rem"}}>End</h1>
    </div><div style={{ display: "flex", justifyContent: "space-between", width: '100%' }}>
        <Button style={{fontSize:"1.2rem"}}
          startIcon={<ArrowBackIosNewIcon sx={{ color: 'orange' }} fontSize='large' />}
          onClick={() => navigate(prevPage)}
        >
          Last Slide
        </Button>

        <Link to="/">
          <Button style={{fontSize:"1.2rem"}}
            endIcon={<ArrowForwardIosIcon sx={{ color: 'orange' }} fontSize='large' />}
            onClick={() => navigate(initialPage)}
          >
            Success Cases
          </Button>
        </Link>
      </div></>
    
  );
};

export default EndCase;

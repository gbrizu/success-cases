import React from 'react';
import Box from '@mui/material/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import { useContext } from "react";
import { CaseViewContextProvider } from "../../context/casesView.context";

const CaseDetailsButtons = ({prevPage, nextPage }) => {
  const { navigate } = useContext(
    CaseViewContextProvider
);
  return (
      <div style={{ display: "flex", justifyContent: "space-between", margin: '1rem' }}>
        <Button style={{fontSize:"1.3rem"}}
          startIcon={<ArrowBackIosNewIcon
            sx={{ color: 'orange' }}
            fontSize='large' />}
            onClick={() => navigate(prevPage)}
        >Back</Button>

        <Button style={{fontSize:"1.3rem"}}
          endIcon={<ArrowForwardIosIcon
            sx={{ color: 'orange' }}
            fontSize='1.3rem' />}
            onClick={() => navigate(nextPage)}

        >Next</Button>
      </div>
  );
};

export default CaseDetailsButtons;

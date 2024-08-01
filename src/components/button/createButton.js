import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function CreateButton() {
  return (
    <Link to="/NewSuccessCases">
      <Button
        variant="contained"
        size="large"
        sx={{
          height: '3rem',
          marginTop: '2rem',
          marginLeft: '2rem',
          backgroundColor: '#bfd732',
          color: 'black',
        }}
      >
        Create new Success Case
      </Button>
    </Link>
  );
}

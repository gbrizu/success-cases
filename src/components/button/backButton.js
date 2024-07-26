import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to="/">
    <Button
      disableElevation
      variant="contained"
      size="large"
      sx={{height: '5rem', marginTop: '5rem', marginLeft:'5rem', backgroundColor: 'blue', color: 'white'}}
      aria-label="Disabled button group"

    >
      <Button>◀ Back</Button>
    </Button> </Link>
  );
}

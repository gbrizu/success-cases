import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function CreateButton() {
  return (
     <Link to="/layout2">
          <Button variant="contained" size="large" sx={
            {
              height: '5rem',
              marginTop: '2rem',
              marginLeft: '2rem',
              color: 'white',
              backgroundColor: 'blue',
            }
    }>Create new Success Case</Button></Link>
  );
}

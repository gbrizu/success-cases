import * as React from 'react';
import Button from '@mui/material/Button';

export default function SearchButton({handleClick}) {
    return (
        <Button
            variant="contained"
            size="large"
            sx={{
                height: '3rem',
                marginTop: '2rem',
                marginLeft: '2rem',
                minWidth: '17rem',
                background:'#BFD52E',
                '&:hover': { 
                    backgroundColor: '#6A8B06',
                }
          }}
            onClick={handleClick}
        >
            Search
        </Button>
    );
}   

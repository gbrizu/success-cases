import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MultipleSelect from './MultipleSelect'; // Ajusta la ruta según la ubicación real del componente

const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            {/* Incluye tu componente MultipleSelect aquí */}
            <MultipleSelect />
          </Item>
        </Grid>
        {/* Agrega más elementos Grid según sea necesario */}
      </Grid>
    </Box>
  );
}


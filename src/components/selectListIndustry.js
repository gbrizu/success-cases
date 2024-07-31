import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Typography } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelect({ options, value, onChange}) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <Typography variant="h6" style={{ marginRight: '4rem' }}>Industry</Typography>
      <FormControl 
        sx={{ m: 1, 
          width: 300, 
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#BFD52E',
            },
          },}}>
        <InputLabel 
          id="demo-multiple-name-label"
          sx={{ 
            '&.Mui-focused': { 
              color: '#6A8B06' 
            }
          }}
        >
        Name
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {options.map((item) => (
            <MenuItem
              key={item.id}
              value={item.id}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

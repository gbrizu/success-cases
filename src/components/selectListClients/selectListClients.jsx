import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './selectListClients.css'
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

export default function SelectListClients({ options, value, onChange }) {
  const theme = useTheme();
  const [personName, setPersonName] = useState(value || []);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
      <Typography variant="h6" style={{ marginRight: "5.3rem"}}>
        Client
      </Typography>
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
}

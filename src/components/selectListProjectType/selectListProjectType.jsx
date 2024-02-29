import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


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

const names = [
  'Entertainment',
  'Healthcare',
  'Banking',
  'Education',
];

function getStyles(name, projectType, theme) {
  return {
    fontWeight:
      projectType.indexOf(name) !== -1
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export default function SelectListProjectType() {
  const theme = useTheme();
  const [projectType, SetProjectType] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    SetProjectType(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
    <Typography variant="h6" style={{ marginRight: "4rem" }}>Project Type</Typography>
    <FormControl >
      <InputLabel id="demo-multiple-name-label">Project type</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={projectType}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, projectType, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
  
  
    );    
}
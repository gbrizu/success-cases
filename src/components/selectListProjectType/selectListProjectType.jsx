import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";

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

export default function SelectListProjectType({ options, value, onChange }) {
  const theme = useTheme();
  const [projectType, SetProjectType] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };
  

  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <Typography variant="h6" style={{ marginRight: "2.3rem" }}>
        Project Type
      </Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Type</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label="Type" />}
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

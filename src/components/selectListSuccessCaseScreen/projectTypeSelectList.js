import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

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

export default function ProjectTypeSelectList({ value, onChange, options }) {
  const theme = useTheme();
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <Typography variant="h6" style={{ marginRight: "2.1rem" }}>
        Project Type
      </Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">
          Select Project Type
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={value}
          onChange={onChange}
          input={<OutlinedInput label="Select Project Type" />}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

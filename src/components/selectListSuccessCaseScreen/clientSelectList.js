import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./clientSelectList.css";
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

export default function ClientSelectList({ options = [], value, onChange }) {
  const theme = useTheme();
  const [personName, setPersonName] = useState(value || []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    onChange && onChange(event);
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <Typography variant="h6" style={{ marginRight: "6rem" }}>
        Client
      </Typography>
      <FormControl sx={{ m: 1,
          width: 300,
          height: 50,
          border: '2px #BFD52E',
          '& .Mui-focused': {
            borderColor: '#BFD52E',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#BFD52E',
            },
          },}}>
        <InputLabel id="demo-multiple-name-label"
          sx={{
            '&.Mui-focused': {
              color: '#6A8B06',
            },
          }}>
          Name
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {(options?.length > 0) && (options?.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          )))}
        </Select>
      </FormControl>
    </div>
  );
}

import React, { useState } from 'react';
import { Typography, FormControl, Select, MenuItem, OutlinedInput } from '@mui/material';

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

export default function SelectListGeneric({ label, value, onChange, options, labelMarginRight = '2.4rem' }) {
    const [selectedValue, setSelectedValue] = useState(value || []);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedValue(typeof value === 'string' ? value.split(' ') : value);
        onChange && onChange(event);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Typography variant="h6" style={{ marginRight: labelMarginRight }}>
                {label}
            </Typography>
            <FormControl
                sx={{
                    m: 1,
                    width: 300,
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#BFD52E' },
                    },
                }}
            >
                <Select
                    labelId={`${label}-selectListLabelId`}
                    id={`${label}-selectListId`}
                    value={selectedValue}
                    onChange={handleChange}
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

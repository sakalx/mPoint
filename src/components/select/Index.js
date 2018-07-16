import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const RenderSelect = ({label, list, onChange, value, ...other}) => (
  <TextField
    {...other}
    id={`select-${label}`}
    label={label}
    margin="normal"
    onChange={({target: {value}}) => onChange({value})}
    select
    value={value}
  >
    {list.map(({label}, index) => (
      <MenuItem key={String(index)} value={label}>
        {label}
      </MenuItem>
    ))}
  </TextField>
);

export default RenderSelect;
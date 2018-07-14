import React from 'react';

import CustomFormat from './CustomFormat';

import TextField from '@material-ui/core/TextField';

const RenderInputNumber = ({label, onChange, value, ...other}) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    id={`input-number-${label}`}
    InputProps={{
      inputComponent: CustomFormat,
    }}
    inputProps={{
      ...other,
    }}
  />
);

export default RenderInputNumber;
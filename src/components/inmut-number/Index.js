import React from 'react';

import CustomFormat from './CustomFormat';

import TextField from '@material-ui/core/TextField';

const RenderInputNumber = ({label, onChange, value, className, ...other}) => (
  <TextField
    className={className}
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
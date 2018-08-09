import React from 'react';

import CustomFormat from './CustomFormat';

import TextField from '@material-ui/core/TextField';

const RenderInputNumber = ({
                             className = '',
                             disabled,
                             error = false,
                             label,
                             onChange,
                             value,
                             ...other
                           }) => (
  <TextField
    className={className}
    disabled={disabled}
    error={error}
    id={`input-number-${label}`}
    label={label}
    onChange={onChange}
    value={value}
    InputProps={{
      inputComponent: CustomFormat,
    }}
    inputProps={{
      ...other,
    }}
  />
);

export default RenderInputNumber;
import React from 'react';

import {camelCaseToString} from 'root/helpers/camel-case';

import {InputField} from './style';

const RenderInput = ({
                       className = '',
                       helperText='',
                       InputLabelProps,
                       label=false,
                       ref,
                       ...other
}) => (
  <InputField
    className={className}
    helperText={helperText}
    label={label && camelCaseToString(label)}
    margin="normal"
    InputLabelProps={InputLabelProps}
    InputProps={{
      inputRef: ref,
      ...other,
    }}
  />);

export default RenderInput;
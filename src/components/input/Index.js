import React from 'react';

import {camelCaseToString} from 'root/helpers/camel-case';

import {InputField} from './style';

const RenderInput = ({ref, stateKey, ...other}) => (
  <InputField
    fullWidth
    label={camelCaseToString(stateKey)}
    margin="normal"
    required={true}
    InputProps={{
      inputRef: ref,
      ...other,
    }}
  />);

export default RenderInput
import React from 'react';

import {InputField} from './style';

const RenderInput = ({ref, label, ...other}) =>
  <InputField
    fullWidth
    label={label}
    InputProps={{
      inputRef: ref,
      ...other,
    }}
  />;

export default RenderInput
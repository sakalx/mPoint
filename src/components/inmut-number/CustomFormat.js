import React from 'react';

import NumberFormat from 'react-number-format';
import limit from './limit';

const CustomFormat = ({inputRef, onChange, length=2, maxValue, ...other}) => (
  <NumberFormat
    {...other}
    ref={inputRef}
    onValueChange={({value}) => {
      onChange({
        target: {
          value: limit(value.substring(0, length), maxValue),
        },
      });
    }}
    thousandSeparator
  />
);

export default CustomFormat;
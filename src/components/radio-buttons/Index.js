import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioButtons = ({list, onChange, row=false, title, value}) => (
  <FormControl component="fieldset"  required>
    <FormLabel component="legend">{title}</FormLabel>
    <RadioGroup
      aria-label={title}
      name={`${title}1`}
      onChange={onChange}
      row={row}
      value={value}
    >
      {
        list.map(({label}, index) => (
          <FormControlLabel
            key={String(index)}
            value={label}
            control={<Radio color="primary"/>}
            label={label}
          />
        ))
      }
    </RadioGroup>
  </FormControl>
);

export default RadioButtons;
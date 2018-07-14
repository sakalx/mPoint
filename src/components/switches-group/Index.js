import React from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchesGroup = ({onChange, row=false, switches, title}) => {
  const group = Object.keys(switches);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <FormGroup row={row}>
        {group.map((label, index) => (
            <FormControlLabel
              key={String(index)}
              control={
                <Switch
                  checked={switches[label]}
                  onChange={onChange(label)}
                  value={label}
                  color="primary"
                />
              }
              label={label}
            />
          )
        )}
      </FormGroup>
    </FormControl>
  )
};

export default SwitchesGroup;
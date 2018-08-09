import React from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchesGroup = ({
                         className = '',
                         label,
                         onChange,
                         row = false,
                         switches,
                         title,
}) => {
  const group = Object.keys(switches);

  return (
    <FormControl component="fieldset" className={className}>
      <FormLabel component="legend">{title}</FormLabel>
      <FormGroup row={row}>
        {group.map((key, index) => (
            <FormControlLabel
              key={String(index)}
              control={
                <Switch
                  checked={switches[key]}
                  onChange={onChange(key)}
                  value={key}
                  color="primary"
                />
              }
              label={label || key}
            />
          )
        )}
      </FormGroup>
    </FormControl>
  )
};

export default SwitchesGroup;
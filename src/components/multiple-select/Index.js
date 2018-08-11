import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import {
  Chips,
  Unit,
} from './style';

const MultipleSelect = ({
                          className,
                          id = 'select-multiple-chip',
                          label,
                          list,
                          onChange,
                          value,
                          disabled=false
                        }) => (
  <FormControl className={className} disabled={disabled}>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <Select
      multiple
      value={value}
      onChange={onChange}
      input={<Input id={id}/>}
      renderValue={selected => (
        <Chips>
          {selected.map(value => (
            <Unit key={value} label={value}/>
          ))}
        </Chips>
      )}
    >
      {list.map(({label}) => (
        <MenuItem key={label} value={label}>
          <Checkbox checked={value.indexOf(label) > -1}/>
          <ListItemText primary={label}/>
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default MultipleSelect;
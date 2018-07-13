import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';

import {
  Select,
} from './style';

class RenderSelect extends React.PureComponent {
  state = {
    value: '',
  };

  render() {
    const {label, list, onChange, value} = this.props;

    return (
      <Select
        id={`select-${label}`}
        label={label}
        margin="normal"
        onChange={({target: {value}}) => onChange({value})}
        required={true}
        select
        value={value}
      >
        {list.map(({label}, index) => (
          <MenuItem key={String(index)} value={label}>
            {label}
          </MenuItem>
        ))}
      </Select>
    )
  }
}

export default RenderSelect;
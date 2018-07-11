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
    const {label, list, onChangeRegion, value} = this.props;

    return (
      <Select
        id={`select-${label}`}
        select
        label={label}
        value={value}
        onChange={({target: {value}}) => onChangeRegion({value})}
        margin="normal"
      >
        {list.map(({value}, index) => (
          <MenuItem key={String(index)} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    )
  }
}

export default RenderSelect;
import React from 'react';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

import {
  Range,
} from './style';

const RangeSlider = ({onChange, value, min = 0, max = 50, step = 0.1}) => (
  <Range
    value={value}
    onChange={onChange}
    min={min} max={max} step={step}
  />
);
/*
class RangeSlider2 extends React.PureComponent {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({value: Number(value.toFixed(1))});
  };

  render() {
    const {value} = this.state;

    return (
      <Wrap>
        <Typography id="percentage-range">{value}</Typography>
        <Slider
          value={value}
          aria-labelledby="percentage-range"
          onChange={this.handleChange}
          min={0} max={50} step={0.1}
        />
      </Wrap>
    );
  }
}
*/
export default RangeSlider;
import React from 'react';

import {listOfAdType} from 'static/lists';

import Typography from '@material-ui/core/Typography';

import {
  AdShape,
  LeftShapes,
  RightShapes,
  RowShapes,
  Select,
  Shapes,
  Wrap,
} from './style';

class NewAd extends React.PureComponent {
  state = {
    adType: {
      value: '',
    },
  };

  handleSelectType = value => {
    this.setState({adType: value});
  };

  renderAdShape = (label, size) => (
    <AdShape size={size}>
      <Typography component='h5' variant='caption'>
        {label}
      </Typography>
    </AdShape>
  );

  render() {
    const {adType} = this.state;

    return (
      <Wrap>
        <Select
          label='Ad type'
          list={listOfAdType}
          onChange={this.handleSelectType}
          value={adType.value}
        />

        <Shapes>
          {this.renderAdShape('Full banner (468 / 60)', [468, 60])}

          <RowShapes>
            <LeftShapes>
              {this.renderAdShape('Square button (125 / 125)', [125, 125])}
              {this.renderAdShape('Button 2 (120 / 60)', [120, 60])}
              {this.renderAdShape('Micro bar (88 / 31)', [88, 31])}
            </LeftShapes>

            <RightShapes>
              {this.renderAdShape('Button 1 (120 / 90)', [120, 90])}
              {this.renderAdShape('Vertical banner (120 / 240)', [120, 240])}
            </RightShapes>
          </RowShapes>
        </Shapes>
      </Wrap>
    );
  }
}

export default NewAd;
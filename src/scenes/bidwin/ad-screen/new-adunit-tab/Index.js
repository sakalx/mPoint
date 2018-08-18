import React from 'react';

import {listOfKeyWords, listOfAdGroupType} from 'static/lists';

import Typography from '@material-ui/core/Typography';

import {
  AdShape,
  Input,
  Row,
  Select,
  SelectKeywords,
  Status,
  Wrap,
} from './style';

class NewAdUnitTab extends React.PureComponent {
  state = {
    unitName: {
      value: '',
    },
    keywords: [],
    status: {
      disabled: false,
    },
    groupType: {
      value: '',
    },
  };

  handleChangeState = ({value}, prop) => {
    this.setState(state => ({
      [prop]: {
        ...state[prop],
        value: value.trimStart(),
      },
    }));
  };


  handleChangeStatus = label => ({target}) => {
    this.setState(({status}) => ({
        status: {
          ...status,
          [label]: target.checked,
        },
      })
    );
  };

  render() {
    const {unitName, keywords, status, groupType} = this.state;

    return (
      <Wrap>
        <Input
          disabled={status.disabled}
          label='unitName'
          onChange={({target}) => this.handleChangeState(target, 'unitName')}
          value={unitName.value}
        />
        <SelectKeywords
          disabled={status.disabled}
          id='select-keywords--ad'
          label='Keywords'
          list={listOfKeyWords}
          onChange={({target}) => this.setState({keywords: target.value})}
          value={keywords}
        />
        <Row>
          <AdShape>
            <Typography component='h5' variant='caption'>
              Button 1 (120 / 90)
            </Typography>
          </AdShape>
          <Status
            onChange={this.handleChangeStatus}
            switches={status}
            label={status.disabled ? 'Disabled' : 'Enabled'}
          />
        </Row>
        <Select
          disabled={status.disabled}
          label='Group type'
          list={listOfAdGroupType}
          onChange={value => this.handleChangeState(value, 'groupType')}
          value={groupType.value}
        />
      </Wrap>
    );
  }
}

export default NewAdUnitTab;
import React from 'react';

import {listOfAdType, listOfKeyWords, listOfAdGroupType} from 'root/static/lists';

import SaveButton from 'root/components/save-button';

import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import {
  ChangeType,
  LeftColumn,
  Main,
  PhoneScreen,
  SelectGroupType,
  SelectKeywords,
  ShapeAd,
  Status,
  Wrap,
} from './style';

class Ad extends React.PureComponent {
  state = {
    status: {enabled: true},
    type: {
      value: listOfAdType[0].label,
    },
    groupType: {value: ''},
    keywords: [],
    showShape: true,
  };

  handleChangeStatus = label => ({target}) => {
    this.setState(({status}) => ({
        status: {
          ...status,
          [label]: target.checked,
        },
        activeStep: target.checked ? 4 : -1,
      })
    );
  };

  handleChangeType = ({target}) => {
    this.setState(() => ({showShape: false,}),
      () => {
        setTimeout(() => this.setState({
          type: {
            ...this.state.type,
            value: target.value,
          },
          showShape: true,
        }), 66)
      }
    );
  };

  handleSelectGroupType = value => {
    this.setState(({groupType}) => ({
        groupType: {
          ...groupType,
          ...value,
        }
      })
    )
  };

  handleSelectKeywords = event => {
    this.setState({keywords: event.target.value});
  };

  handleSave = () => {
    const {type, groupType} = this.state;

    this.props.setAdSummary({
      adType: `${type.value} ${groupType.value}`,
      expanded: false,
    });
  };

  render() {
    const {status, type, groupType, keywords, showShape} = this.state;
    // FIXME regExp here pls.
    const label = type.value.split(' (')[0];
    const size = type.value.split('(')[1].split(')')[0].split(' ').join().split(',/,');
    const showSaveButton = type.value && groupType.value && !!keywords.length;

    return (
      <Wrap>
        <LeftColumn>
          <Status
            onChange={this.handleChangeStatus}
            switches={status}
            label={status.enabled ? 'Enabled' : 'Disabled'}
          />
          <Main>
            <ChangeType
              disabled={!status.enabled}
              list={listOfAdType}
              onChange={this.handleChangeType}
              row={false}
              title='Ad type'
              value={type.value}
            />
            <SelectGroupType
              disabled={!status.enabled}
              label='Group type'
              list={listOfAdGroupType}
              onChange={this.handleSelectGroupType}
              value={groupType.value}
            />
            <SelectKeywords
              disabled={!status.enabled}
              id='select-keywords--ad'
              label='Keywords'
              list={listOfKeyWords}
              onChange={this.handleSelectKeywords}
              value={keywords}
            />
          </Main>
          <PhoneScreen>
            <Zoom in={showShape}>
              <ShapeAd size={size}>
                <Typography color='textSecondary' variant='subheading'>{label}</Typography>
                <Typography color='textSecondary' variant='subheading'>{size.join(' / ')}</Typography>
              </ShapeAd>
            </Zoom>
          </PhoneScreen>
        </LeftColumn>
        <SaveButton callBack={this.handleSave} visible={showSaveButton}/>
      </Wrap>
    )
  }
}

export default Ad;
import React from 'react';

import {listOfAdType, listOfKeyWords, listOfAdGroupType} from 'root/static/lists';

import {smartPhone} from 'root/static/icon';
import SaveButton from 'root/components/save-button';

import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import {
  AdSubTitle,
  ChangeType,
  Content,
  Description,
  Main,
  PhoneScreen,
  SelectGroupType,
  SelectKeywords,
  ShapeAd,
  SmartPhoneIcon,
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
    this.props.handlePanel({expanded: false});
  };

  render() {
    const {status, type, groupType, keywords, showShape} = this.state;
    // FIXME regExp here pls. 😥😤
    const size = type.value.split('(')[1].split(')')[0].split(' ').join().split(',/,');
    const showSaveButton = type.value && groupType.value && !!keywords.length;

    return (
      <Wrap>
        <Content>
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
                <Typography color='textSecondary' component='h5' variant='subheading'>
                  {size.join(' / ')}
                </Typography>
              </ShapeAd>
            </Zoom>
            <SmartPhoneIcon color={status.enabled ? 'action' : 'disabled'} viewBox='200 0 800 800'>
              {smartPhone()}
            </SmartPhoneIcon>
          </PhoneScreen>
        </Content>
        <SaveButton callBack={this.handleSave} visible={showSaveButton}/>
      </Wrap>
    )
  }
}

export default Ad;
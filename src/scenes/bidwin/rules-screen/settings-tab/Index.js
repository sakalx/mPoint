import React from 'react';

import CampaignRuleTab from 'bidwin/ad-screen/campaign-rule-tab';

class SettingsTab extends React.PureComponent {

  render() {
    return (
      <CampaignRuleTab currentCampaign={this.props.currentCampaign}/>
    );
  }
}

export default SettingsTab;
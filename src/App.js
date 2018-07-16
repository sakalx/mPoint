import React from 'react';

import RuleScreen from 'root/scenes/rule-screen';

import RuleDetail from 'root/scenes/rule-screen/components/rule-detail';


class App extends React.PureComponent {
  state = {};

  render() {

    return (
      <React.Fragment>
        <RuleDetail/>
      </React.Fragment>
    )
  }
}

export default App;
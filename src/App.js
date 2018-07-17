import React from 'react';

import Rule from 'root/scenes/rule';

import Slide from '@material-ui/core/Slide';

const App = () => (
  <React.Fragment>
    <Slide direction="up" in={true} timeout={{enter: 800}}>
      <Rule/>
    </Slide>
  </React.Fragment>
);

export default App;
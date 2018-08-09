import React from 'react';

import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';

import {
  SaveIcon,
  Wrap,
} from './style';

const SaveButton = ({callBack, visible}) => (
  <Zoom in={!!visible}>
    <Wrap>
      <Button color='primary' variant='outlined' onClick={callBack}>
        <SaveIcon/>
        Save
      </Button>
    </Wrap>
  </Zoom>
);

export default SaveButton;
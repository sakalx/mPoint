import React from 'react';
import styled from 'styled-components';

import {
  listOfCampaignNet,
  listOfCampaignType,
  listOfLocation,
} from 'root/static/lists';

import RenderInputNumber from 'root/components/inmut-number';
import RenderSelect from 'root/components/select';

import TextField from '@material-ui/core/TextField';

export const TypeSelect = ({type, callBack}) => (
  <div>
    <Select
      label='Type'
      list={listOfCampaignType}
      onChange={({value}) => callBack('type', value)}
      value={type.value}
    />
  </div>
);

export const NetworkSelect = ({locations, network, callBack}) => (
  <div>
    <Select
      label='Locations'
      list={listOfLocation}
      onChange={({value}) => callBack('locations', value)}
      value={locations.value}
    />

    <Select
      label='Network'
      list={listOfCampaignNet}
      onChange={({value}) => callBack('network', value)}
      value={network.value}
    />
  </div>
);

export const SetBudget = ({budget, callBack}) => (
  <div>
    <InNum
      length={5}
      onChange={callBack}
      suffix='$'
      value={budget.value}
    />
  </div>
);

export const SetDate = ({startDate, endDate, callBack}) => (
  <form noValidate>
    <SelectDate
      defaultValue={startDate.value}
      label='Start date'
      onChange={({target}) => callBack('startDate', target.value)}
      type='date'
      InputLabelProps={{
        shrink: true,
      }}
    />
    <SelectDate
      defaultValue={endDate.value}
      label='End date'
      onChange={({target}) => callBack('endDate', target.value)}
      type='date'
      InputLabelProps={{
        shrink: true,
      }}
    />
  </form>
);

const _width = styled('div')`
  margin: 15px !important;
  width: 200px;
`;

const Select = _width.withComponent(RenderSelect);
const InNum = _width.withComponent(RenderInputNumber);
const SelectDate = _width.withComponent(TextField);
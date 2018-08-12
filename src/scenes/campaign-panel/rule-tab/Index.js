import React from 'react';

import SaveButton from 'root/components/save-button';

import {
  TypeSelect,
  NetworkSelect,
  SetBudget,
  SetDate,
} from './step-content';

import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';

import {
  EditButton,
  EditIcon,
  LabelValue,
  SaveIcon,
  Status,
  Wrap,
} from './style';

class RuleTab extends React.PureComponent {
  state = {
    activeStep: 0,
    status: {enabled: true},
    type: {value: ''},
    locations: {value: ''},
    network: {value: ''},
    budget: {value: 0},
    startDate: {value: ''},
    endDate: {value: ''},
    errorData: false,
  };

  handleReset = () => {
    this.setState({activeStep: 0});
  };

  handleNextStep = isLastStep => {
    isLastStep
      ? this.handleSave()
      : this.setState(({activeStep}) => ({
        activeStep: activeStep + 1,
      }))
  };

  handleChangeStatus = label => ({target}) => {
    this.setState(({status}) => ({
        status: {
          ...status,
          [label]: target.checked,
        },
        activeStep: target.checked ? 4 : -2,
      })
    );
  };

  handleChangeBudget = ({target}) => {
    const value = Number(target.value);

    this.setState(({budget}) => ({
        budget: {
          ...budget,
          value: value < 0 ? ~value : value,
        }
      })
    );
  };

  handleSave = () => {
    const {status, startDate, endDate} = this.state;
    const date = startDate.value ? `${startDate.value} to ${endDate.value}` : '';
    const active = status.enabled ? 'Enabled' : 'Disabled';
    const validRangeDate = (+new Date(endDate.value) - +new Date(startDate.value)) > 0;

    if (validRangeDate) {
      this.setState(({activeStep}) => ({
        activeStep: activeStep + 1,
        errorData: false,
      }));
      this.props.handleSave(date, active);
    } else {
      this.setState({errorData: true});
    }
  };

  getSteps = () => {
    const {type, locations, network, budget, startDate, endDate} = this.state;

    return ([
      {'Campaign type': [type]},
      {'Network': [locations, network]},
      {'Budget': [budget]},
      {'Date': [startDate, endDate]},
    ])
  };

  renderStepContent = step => {
    const {type, locations, network, budget, startDate, endDate} = this.state;
    const callBack = this._setState;

    switch (step) {
      case 0:
        return TypeSelect({type, callBack});
      case 1:
        return NetworkSelect({locations, network, callBack});
      case 2:
        return SetBudget({budget, callBack: this.handleChangeBudget});
      case 3:
        return SetDate({startDate, endDate, callBack});
    }
  };

  renderStepLabel = (label, values) => {
    if (values[0].value) {
      return (
        <StepLabel error={label === 'Date' ? this.state.errorData : false}>
          {label} :
          {values.map(({value}, index) => (
            <LabelValue key={String(index)} enabled={this.state.status.enabled}>
              {typeof value === 'number'
                ? ` ${value} $`
                : (index === values.length - 1 ? ` ${value}` : ` ${value} - `)
              }
            </LabelValue>)
          )}
        </StepLabel>
      )
    }

    return <StepLabel>{label}</StepLabel>
  };

  renderStepButton = completed => {
    const {activeStep} = this.state;
    const isLastStep = activeStep === this.getSteps().length - 1;

    return (
      <Collapse in={completed}>
        {activeStep > 0 && (
          <Button onClick={() => this.setState({activeStep: activeStep - 1})}>
            Back
          </Button>
        )}
        <Button
          color='primary'
          onClick={() => this.handleNextStep(isLastStep)}
          variant='contained'
        >
          {isLastStep && <SaveIcon/>}
          {isLastStep ? 'Save' : 'Next'}
        </Button>
      </Collapse>
    )
  };

  _setState = (key, value) => {
    this.setState(state => ({
        [key]: {
          ...state[key],
          value,
        }
      })
    )
  };

  render() {
    const {activeStep, status} = this.state;

    return (
      <Wrap>
        <Status
          onChange={this.handleChangeStatus}
          switches={status}
          label={status.enabled ? 'Enabled' : 'Disabled'}
        />

        <Stepper activeStep={activeStep} orientation='vertical'>
          {
            this.getSteps().map((obj, index) => {
              const step = Object.entries(obj)[0];
              const label = step[0], values = step[1];
              const completed = values.every(({value}) => !!value) && status.enabled;

              return (
                <Step key={String(index)} completed={completed}>
                  {this.renderStepLabel(label, values)}
                  <StepContent>
                    {this.renderStepContent(index)}
                    {this.renderStepButton(completed)}
                  </StepContent>
                </Step>
              )
            })
          }
        </Stepper>
        <Collapse in={activeStep === this.getSteps().length}>
          <EditButton color='primary' onClick={this.handleReset} variant='contained'>
            <EditIcon/> Edit
          </EditButton>
        </Collapse>
        {!status.enabled && (
          <SaveButton
            callBack={() => this.handleNextStep(true)}
            visible={!status.enabled}
          />
        )}
      </Wrap>
    )
  }
}

export default RuleTab;

// new Date("2018-08-15").toLocaleDateString()
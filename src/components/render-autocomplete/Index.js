import React from 'react';

import Autosuggest from 'react-autosuggest';

import RenderInput from 'root/components/render-input';
import {
  getSuggestions,
  getSuggestionValue,
  RenderSuggestion,
  RenderSuggestionsContainer,
} from './suggestions';

import {style} from './style';

class Autocomplete extends React.PureComponent {
  state = {
    suggestions: [],
  };

  handleSuggestionsFetchRequested = ({value}) => {
    this.setState({
      suggestions: getSuggestions(this.props.suggestions, value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const {
      onChange = () => null,
      startAdornment = null,
      stateKey = '!stateKey',
      value = '',
    } = this.props;
    const {suggestions} = this.state;

    return (
      <Autosuggest theme={{
        container: style.container,
        suggestionsContainerOpen: style.suggestionsContainerOpen,
        suggestionsList: style.suggestionsList,
        suggestion: style.suggestion,
      }}
                   renderInputComponent={RenderInput}
                   suggestions={suggestions}
                   onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                   onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                   renderSuggestionsContainer={RenderSuggestionsContainer}
                   getSuggestionValue={getSuggestionValue}
                   renderSuggestion={RenderSuggestion}
                   inputProps={{
                     ...this.props,

                   }}
      />
    );
  }
}

export default Autocomplete;
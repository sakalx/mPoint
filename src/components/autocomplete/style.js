import styled from 'styled-components';

export const Name = styled('strong')`
  font-weight: 300;
`;

export const style = {
  container: {
    display: 'flex',
    flex: '1 1 auto',
  },
  suggestionsContainerOpen: {
    marginTop: '5px',
    position: 'absolute',
    zIndex: 3,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
};
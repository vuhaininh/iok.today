import React from 'react';
const toggleError = isOpen => {
  initialState.openError = isOpen;
};
const setErrorMessage = message => {
  initialState.errorMessage = message;
};

export const initialState = {
  openError: false,
  errorMessage: '',
  toggleError,
  setErrorMessage,
};

export const AppContext = React.createContext(initialState);

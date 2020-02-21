import React from 'react';
const toggleError = isOpen => {
  initialState.openError = isOpen;
};
const setErrorMessage = message => {
  initialState.errorMessage = message;
};
const setUser = user => {
  initialState.user = user;
};
export const initialState = {
  user: '',
  openError: false,
  errorMessage: '',
  toggleError,
  setErrorMessage,
  setUser,
};

export const AppContext = React.createContext(initialState);

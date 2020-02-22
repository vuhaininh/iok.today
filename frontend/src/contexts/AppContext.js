import React from 'react';
const toggleErrorPopup = isOpen => {
  initialState.openErrorPopup = isOpen;
};
const setErrorMessage = message => {
  initialState.errorMessage = message;
};
const toggleSuccessPopup = isOpen => {
  initialState.openSuccessPopup = isOpen;
};
export const initialState = {
  openErrorPopup: false,
  errorMessage: '',
  toggleErrorPopup,
  setErrorMessage,
  openSuccessPopup: false,
  toggleSuccessPopup,
};

export const AppContext = React.createContext(initialState);

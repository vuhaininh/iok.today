import React, { Suspense } from 'react';
import './App.css';
import './styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, far, fas);
import { AppContext, initialState } from './contexts/AppContext';

function App({ children }) {
  return (
    <Suspense fallback="loading">
      <AppContext.Provider value={initialState}>
        <div>{children}</div>;
      </AppContext.Provider>
    </Suspense>
  );
}

export default App;

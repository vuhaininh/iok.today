import React, { Suspense, Component } from 'react';
import './App.css';
import './styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, far, fas);
import { AppContext, initialState } from './contexts/AppContext';

class App extends Component {
  state = {
    isUpdate: false,
  };
  updateApp() {
    this.setState({ isUpdate: !this.state.isUpdate });
    console.log('Hello ');
  }
  render() {
    initialState.updateApp = this.updateApp.bind(this);
    return (
      <Suspense fallback="loading">
        <AppContext.Provider value={initialState}>
          <div>{this.props.children}</div>;
        </AppContext.Provider>
      </Suspense>
    );
  }
}

export default App;

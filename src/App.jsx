import React from 'react';
import { Provider } from 'react-redux';

import Increment from './components/Increment';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="app-example">
      <Increment />
    </div>
  </Provider>
);

export default App;

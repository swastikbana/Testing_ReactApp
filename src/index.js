import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './createStore';

function Root() {
  return <App />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  rootElement
);

import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

test('renders App', () => {
  const div = document.createElement('Header');
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, div);
});

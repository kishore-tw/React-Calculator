import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import Header from './components/Header'

xtest('renders learn react link', () => {
  const div = document.createElement('Header');
  ReactDOM.render(<App />, div);
});

import React from 'react';
import './App.css';
import Header from './components/Header'
import VisibleCalculator from './components/VisibleCalculator'

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <VisibleCalculator/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Components/Hello/Hello';
import HelloProps from './Components/Hello/HelloProps';
import HelloProp from './Components/Hello/HelloProps';

function App() {
  return (
    <>
      <Hello/>
      <HelloProps name = "react"/>
      <HelloProp></HelloProp>
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import CreateUser from './Components/Array/Array1';
import { useState } from 'react';

function App() {

  return (
    <>
    
        <CreateUser username={'kim'} email={'abc@gmail.com'}/>
    </>
  );
}

export default App;

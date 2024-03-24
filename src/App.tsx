import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Components/Hello/Hello';
import HelloProps from './Components/Hello/HelloProps';
import Destructing from './Components/Hello/Destructing';
import IsSpecial from './Components/Hello/IsSpecial';
import Counter from './Components/Vailable/UseState';
import InputSample from './Components/Vailable/InputState';
import InputSamples from './Components/Vailable/InputsState';
import UseRef1 from './Components/Vailable/UseRef1'
import UserList, { User } from './Components/Vailable/ListRender';
import UseRef2 from './Components/Vailable/UseRef2'

function App() {
  const users: User[] = [
    { id: 1, username: 'User1', email: 'user1@example.com' },
    { id: 2, username: 'User2', email: 'user2@example.com' },
    { id: 3, username: 'User3', email: 'user3@example.com' },
    // 추가적인 사용자 데이터...
  ];   

  return (
    <>
        <UseRef2/>
    </>
  );
}

export default App;

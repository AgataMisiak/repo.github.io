import React from 'react';
// import logo from './logo.svg';
import Users from './Users';
import List from './List';
import './App.css';

function App() {

  return (
    <div className="App">
      <Users title="Lista użytkowników" />
      <List initValue='Agatka'/>
    </div>
  );
}

export default App;
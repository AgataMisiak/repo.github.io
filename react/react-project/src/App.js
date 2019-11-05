import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';

function App() {
  return (
    <div className="App">
      <Counter myText="Instancja komponentu Counter #1"/>
      <Counter />
      <Counter myText="Instancja komponentu Counter #3"/>
      <Counter myText="Instancja komponentu Counter #4"/>
      <CounterClass color="yellow"/>
    </div>
  );
}

export default App;

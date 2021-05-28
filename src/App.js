import logo from './logo.svg';
import './App.css';
import List from './List'
import React from 'react';

const myArray = [...Array(100).keys()].map(x => x + 1);

function App() {
  return (
      <div>
        <List numbers = {myArray}/>
      </div>
  );
}

export default App;

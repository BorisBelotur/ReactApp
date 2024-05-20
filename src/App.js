import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import data from './Records.json';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    setItems(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      
      {items.map(item => (
        
          <div  key={item.id}>{item.key1}</div>
        ))}
        
      </div>
    </div>
  );
}

export default App;

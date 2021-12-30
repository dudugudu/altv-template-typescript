import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './App.css';


function App() {
 const [position, setposition] = useState('x:1, y:1, z:1')

 useEffect(() => {
   // @ts-ignore
   alt.on('Position', (data) => {
    setposition(data)
   })

 }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/dudugudu/AtlV-Framework"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn the Framework
        </a>
        <h1>{position}</h1>
        <button onClick={()=>{
            // @ts-ignore
            alt.emit('getPosition')
        }} >Get Position</button>
      </header>
    </div>
  );
}

export default App;

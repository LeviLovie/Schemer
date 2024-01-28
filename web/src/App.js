import './App.scss';
import {useState} from 'react';

function App() {
  useState(() => {
    console.log("Hello, world!");
  }, []);

  return (
    <div className="App">
      <h1>Something</h1>
    </div>
  );
}

export default App;

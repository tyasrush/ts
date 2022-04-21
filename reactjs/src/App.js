import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  const handleState = () => {
    setState(state == 0 ? 1 : 0);
  };
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
          <div>{state}</div>
	  <button onClick={handleState}>Switch</button>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

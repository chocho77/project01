import React from 'react';
import './App.css';
import ComponentOne from './commponents/ComponentOne';
import ComponentTwo from './commponents/ComponentTwo';
import ErrorExample from './tutorial/useState/setup/error-example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/**
         *  <img src={logo} className="App-logo" alt="logo" />
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
         */}
       <p>My Components</p>
        <React.StrictMode>
          <div>
          <ComponentOne />
          <ComponentTwo />
          <ErrorExample />
          </div>
        </React.StrictMode>
      </header>
    </div>
  );
}

export default App;

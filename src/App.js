import logo from './logo.svg';
import './App.css';
import React from 'react';
import ComponentOne from './commponents/ComponentOne';
import MyComponent from './commponents/MyComponent';
import ComponentTwo from './commponents/ComponentTwo';

function App() {
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
      <main>
      <p>My Components</p>
      <React.StrictMode>
        <div>
        <ComponentOne />
        <ComponentTwo />
        <MyComponent />
        </div>
      </React.StrictMode>
      </main>
      <footer>
        footer
      </footer>
      

    </div>
  );
}

export default App;

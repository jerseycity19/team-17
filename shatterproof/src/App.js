import React from 'react';
import logo from './ShatterproofLogo.png';
import './App.css';
import Home from './pages/Home.js';
import Calendar from './pages/Calendar.js';
import Why from './pages/Why.js';
import Resources from './pages/Resources';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import OutlinedButtons from './components/TabButtons.js';

function App() {
  return (
    <Router>
      {/* <Header/>  --- ALWAYS RENDER */}
      <div className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Route
      path="/"
      render={(props)=><OutlinedButtons {...props} />}
      />
      {/* render components based off of the url route  */}
      <Route
      exact
      path="/"
      render ={(props)=> <Home {...props} />}
      />
      <Route
      path="/resources"
      render ={(props)=> <Resources {...props} />}
      />

    </Router>
  );
}

export default App;

 // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import Calendar from './pages/Calendar.js';
import Why from './pages/Why.js';
import Resources from './pages/Resources';
import Tracker from './pages/Tracker';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import OutlinedButtons from './components/TabButtons.js';
import HomeButton from './components/HomeButton.js';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <React.Fragment>
    <Router>
      {/* <Header/>  --- ALWAYS RENDER */}
      <Route
      path="/"
      render={(props)=><HomeButton {...props} />}
      />
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
      <Route
      path="/tracker"
      render ={(props)=> <Tracker {...props} />}
      />
      
    </Router>
      <div className="Logos">
          <SocialIcon url="https://twitter.com/shatterproofhq?lang=en" target="_blank" style={{margin: 8}}/>
          <SocialIcon url="https://www.facebook.com/ShatterproofHQ/?ref=nf" target="_blank" style={{margin: 8}}/>
          <SocialIcon url="https://www.instagram.com/weareshatterproof/?hl=en" target="_blank" style={{margin: 8}}/>
      </div>
    </React.Fragment>
  );
}

export default App;

/*
<Route
      path="/gallery"
      render ={(props)=> <Gallery {...props} />}
      />
      <Route
      path="/forum"
      render ={(props)=> <Forum {...props} />}
      />
      <Route
      path="/tracker"
      render ={(props)=> <Tracker {...props} />}
      />
      <Route
      path="/donate"
      render ={(props)=> <Donate {...props} />}
      />
      <Route
      path="/fundraise"
      render ={(props)=> <Fundraise {...props} />}
      />
      */
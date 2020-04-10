import React from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Auth/Login/Login'
import Signup from './components/Auth/Signup'
import Home from './pages/Home/Home'

import './App.css';


function App() {
  return (
  <BrowserRouter>
    <div id="app">
        <Header id='header'></Header>
        <div className="body center" id='body'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
            </Switch>
        </div>
        <Footer id='footer'/>
    </div>
  </BrowserRouter>
  );
}

export default App;

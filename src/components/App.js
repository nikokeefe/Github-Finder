import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Alert from './layout/Alert';
import User from './users/User';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

import GithubState from '../context/github/GithubState';
import AlertState from '../context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>                
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>            
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Information from './components/Information';
import Home from './components/Home';
import SignIn from './components/SignIn';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
=======
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
>>>>>>> 16ff8f45668f09e92b56d630f1ca9d0df1b48a29
// import { RouterOutlined } from '@mui/icons-material';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
<<<<<<< HEAD
            <Route exact path='/' component={SignIn} />
            <Route path='/information' component={Information} />
            <Route path='/home' component={Home} />
=======
              <Route exact path='/' component={SignIn} />
              <Route path='/information' component={Information} />
              <Route path='/home' component={Home} />
              <Route path='*' exact={true} component={NotFound} />
>>>>>>> 16ff8f45668f09e92b56d630f1ca9d0df1b48a29
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

// change

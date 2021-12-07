import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Information from './components/Information';
import Home from './components/Home';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { RouterOutlined } from '@mui/icons-material';
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/information' component={Information} />
            <Route path='/home' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  } 
}
export default App;

// change

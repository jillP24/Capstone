import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Information from './components/Information';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { RouterOutlined } from '@mui/icons-material';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/information' component={Information} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

// change

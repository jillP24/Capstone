import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SignIn from './components/SignIn';
import Information from './components/Information';
import ProTip from './ProTip';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// function App(){
//   return(
//       <Routes>
//         <Route path="/" component={SignIn} exact/>
//         <Route path="/information" component={Information} />
//       </Routes>
//   );
// }

export default function App() {
  return (
    <Information />
  );
  }
// export default App;
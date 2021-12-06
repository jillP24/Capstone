import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//import Link from '@mui/material/Link';
import SignIn from './components/SignIn';
import Information from './components/Information';
import Home from './components/Home';
import ProTip from './ProTip';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { RouterOutlined } from '@mui/icons-material';
import {Component} from 'react';

// class App extends Component {
//   render() {
//     return (
//     <Router>
//         <div>
//           <h2>Welcome to React Router Tutorial!!!</h2>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <ul className="navbar-nav mr-auto">
//           <li><Link to={'https://www.facebook.com'} className="nav-link"> facebook </Link></li>
//             <li><Link to={'/'} className="nav-link"> Home </Link></li>
//             <li><Link to={'/information'} className="nav-link">Information</Link></li>
//             <li><Link to={'/signin'} className="nav-link">Sign In</Link></li>
//           </ul>
//           </nav>
//           <hr />
//           <Routes>
//               <Route exact path='/' component={Home} />
//               <Route path='/information' component={Information} />
//               <Route path='/signin' component={SignIn} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;


// export default function App(){
//   return(
//     <div className="App">
//         <Routes>
//           <Route path="/" component={SignIn} />
//           <Route path="/information" component={Information} />
//           <Route path="/home" component={Home} />
//         </Routes>
//     </div>
//     );
// }

export default function App() {
  return (
    <Information />
  );
  }

//export default App;
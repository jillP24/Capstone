//import '../App.css';
import history from 'history.js'
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../../../aws-exports';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
//import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../../../aws-exports.js';
import React from 'react';
import Chatbox from '../../../components/chat-box-2/Chatbox.jsx'
import Layout1Topbar from '../../../components/MatxLayout/Layout1/Layout1Topbar.jsx'
import './App.css'
import { isTargetNameAssociation } from '@aws-amplify/datastore';
Amplify.configure(awsExports); 


const formFields =
  [
    {
      type: "email",
      required: true,
    },
    {
      type: "password",
      required: true,
    },
    {
      type: "given_name", 
      label: 'First Name',
      required: true, 
    },
    {
      type: "family_name",
      label: "Last Name",
      required: true,
    },
    {
      type: "custom:class",
      label: "Graduating class",
      required: true,
      placeholder: "e.g. 2023"
    }
  ];

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
      
    });
  }, []); 

  // if user is authenticated, redirect
  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      
      <Layout1Topbar username = {user.attributes.given_name} class = {user.attributes["custom:class"]}/>
      <Chatbox username = {user.attributes.given_name} last = {user.attributes.family_name} class = {user.attributes["custom:class"]}/>
           {/* <AmplifySignOut /> */}
       </div>
  
  ) : (
     // else, sign up 
    <div className="App">
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignIn headerText="CollegeConnect" />
      <AmplifySignUp formFields={formFields} usernameAlias="email" slot="sign-up" />    
      {/* <a href="javascript:location.reload(true)">Refresh Page </a> */}
    </AmplifyAuthenticator>
    </div>
  );
}

export default App;  
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
//import RootRoutes from './RootRoutes'

import Chatbox from '../../../components/chat-box-2/Chatbox.jsx'
import Layout1Topbar from '../../../components/MatxLayout/Layout1/Layout1Topbar.jsx'
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



const App = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState(); 

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    
  // if user is authenticated, redirect
   return authState === AuthState.SignedIn && user ? (
      <div className="App">
      {/* //     <div>Hello, {user.attributes.given_name}</div> */}
      <Layout1Topbar />
              <Chatbox />
      //     {/* <AmplifySignOut /> */}
      // </div>
    // history.push('/')
    //awsconfig.oauth.redirectSignIn = `${window.location.origin}/dashboard/default`
    //  history.push('/')
     ) : (
       // else, sign up
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignIn headerText="College Connect"/>
        <AmplifySignUp formFields={formFields} usernameAlias="email" slot="sign-up" />
      </AmplifyAuthenticator>
   );
}

export default App;  
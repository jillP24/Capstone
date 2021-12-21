import history from 'history.js'
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Amplify } from 'aws-amplify';
import awsExports from '../../../../aws-exports.js';
import React from 'react';
import Chatbox from '../../../components/chat-box-2/Chatbox.jsx'
import Layout1Topbar from '../../../components/MatxLayout/Layout1/Layout1Topbar.jsx'
import { Link } from "react-router-dom";
Amplify.configure(awsExports); 


const sticky = {
  position: "sticky",
  top: 0,
  justify: "flex-start"
}

 

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
      setUser(authData);
      setAuthState(nextAuthState);
    });
  }, []); 


  // if user is authenticated, redirect
  return authState === AuthState.SignedIn && user ? (

    <div className="App">

      <div style={sticky}> 

      <Layout1Topbar username = {user.attributes.given_name} class = {user.attributes["custom:class"]}></Layout1Topbar>

      </div>

      <div> 

      <Chatbox  username = {user.attributes.given_name} last = {user.attributes.family_name} class = {user.attributes["custom:class"]}></Chatbox>


      </div>

    
   
    
    
    </div> 
  
  ) : (
     // else, sign up 
    
    <div className="App">
      <div style={sticky}> 
      <font size="20">
      CollegeConnect
      </font>
      </div>
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignIn headerText="CollegeConnect" />
      <AmplifySignUp formFields={formFields} usernameAlias="email" slot="sign-up" />    
      {/* <a href="javascript:location.reload(true)">Refresh Page </a> */}
      
    </AmplifyAuthenticator>
        <font size="20">
        
        <Link 
          className="text-primary"
          onClick={() =>
          history.push('/session/About') 
          }> About Us! {' '} 
        </Link> 
        
      <a href="https://github.com/jillP24/Capstone">Github  </a>  
      </font>
      <style>
        
      </style>
   
    </div>

   
  );
}

export default App;   
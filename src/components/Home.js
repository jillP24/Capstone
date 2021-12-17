import React from 'react';
import '../App.css';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

Amplify.configure(awsconfig);

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


  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };


const App = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);


  return authState === AuthState.SignedIn && user ? (
      <div className="App">
         <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Colorado College"
        subtitle="Class of 2023"
      />
      <AmplifySignOut />


         
      </div>
    ) : (
      <div className="App"> 
        <img src="logo_transparent.png" alt="College Connect logo"/>
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignIn headerText="College Connect"/>
        <AmplifySignUp formFields={formFields} usernameAlias="email" slot="sign-up" />
      </AmplifyAuthenticator>
      </div>
  );
}

export default App;
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
//import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../../../aws-exports.js';
import React from 'react';
Amplify.configure(awsExports); 
//import DashboardRoutes from './views/dahsboard'

// we want it to return this entire application ... 
// is that possible??
function App({ signOut, user }) {
  return (
    <div>
      hello
    </div>
   // want to call ./default/dashboard
   // Route::get("edit_contact/{id}",'ContactController@edit')->name('edit_contact');
  );   
}
export default withAuthenticator(App); 
 
import React, { Component } from 'react';
import './login/App.css';
 
/**
 * This file holds the information describing our platform
 * @author jillPollard
 * 
 */   

function App() {
  // adds border around text on screen
   const styles = {
        border: '3px solid rgba(0, 0, 0, 0.05)', 
   };
   // returns html for the page
   return (
      <div className="App">
         <header className="App-header">
            {/* header for the page */}
            <p>About Us!</p>
            <a style={styles}
               className="App-link"
               rel="noopener noreferrer"> 
              {/* body of the page */}
              <br></br> 
      
               Our application is a messaging-based platform geared
               towards universities and colleges. Our mission is to provide students with a 
               school-sponsored space in wihch they can communicate with classmates in their 
               own graduating class.  <br></br><br></br>

               Our platform's sole functionality is messaging. <br></br><br></br>
               Once a user has provided a valid school email, their name, and their graduating class, they are
               redirected to the group-chat for their graduating class.<br></br><br></br>
               
               It's that simple.
            </a>
            <br></br><br></br>
            {/* links back to our login page */}
            <a href="https://www.collegeconnect.link">Back to login  </a>  
           
         </header>
      </div>
   );
}
export default App;

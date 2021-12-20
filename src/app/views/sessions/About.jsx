import React, { Component } from 'react';
import './login/App.css';
 


function App() {
   const styles = {
        border: '3px solid rgba(0, 0, 0, 0.05)', 
   };
   return (
      <div className="App">
         <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
           
            <p>About Us!</p>
            <a style={styles}
               className="App-link"
               rel="noopener noreferrer"> 

              <br></br> 
               
               Our application is a messaging-based platform geared
               towards universities and colleges. Our mission is to provide students with a 
               school-sponsored space in wihch they can communicate with their classmates in thier 
               own graduating class.  <br></br><br></br>

               Our platform's sole functionality is messaging. <br></br><br></br>
               Once a user has provided a valid school email, their name, and their graduating class, they are
               redirected to the group-chat for their graduating class.<br></br><br></br>
               
               It's that simple.
            </a>
            <br></br><br></br>
            <a href="https://www.collegeconnect.link">Back to login  </a>  
           
         </header>
      </div>
   );
}
export default App;

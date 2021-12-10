import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, {Component, useEffect} from 'react';
import axios from '@aws-amplify/storage/node_modules/axios';
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        CollegeConnect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

// const MSG_SUBCRIPTION = 
// {

// }

export default function Home() {
  
  
//     const [msg, setMsg] = useState([]);
    
//     const headers = {
//         'Content-Type' : 'application/graphq',
//         'x-api-key' : 'da2-pkmp2vxojvholmpo6nk5tfbnxa'
//       }
      
//     const fetchUser = 
//     JSON.stringify({ "query": `query MyQuery { listClassOf2023Chats { items { message,  preferred_name} } }`}) ;

//     useEffect( () => {
//         const fetchData = async () => {
//             const q_result = await axios.post('https://oyph3npr7feotdzs5u2fa4ikoa.appsync-api.us-west-2.amazonaws.com/graphql', fetchUser, {
//                 headers: headers
//         }
//     );
//     //update state component
//     const result = q_result.data.data.listClassOf2023Chats;
    
//     setMsg(result.items);
    
//     };
//     fetchData();
// });

    //console.log(msg)
    // const all_msg = new Array();
    // for(var i=msg.length-1; i>=0; i--){
    //     var new_msg = msg[i].message;
    //     var sender = msg[i].preferred_name;
    //     all_msg.push(new_msg + " : " + sender + "------------------------------------");
    // }
    // now get basic array of all users in coversation 1
    //var json = JSON.stringify(msg);
    //console.log(all_msg);
     //var all_msg = json.users.toString();
     //var all_msg = json.substr(1,all_the_users.length-2);

     //var myArray = final.split(",");
     //console.log(myArray); 
    


    const handleSubmit = (event) => {

// Possibly call rest API to handle this....


        event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const email = data.get('email')
    //const password = data.get('password')

    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify(email);
    
    raw = "random"
    var user_email = "random@coloradocollege.edu";
    var preferred_name = "random_user";
    var time = "random";

   

    // const api = 'https://bwew0obssh.execute-api.us-west-2.amazonaws.com/default/Add_MSG';
    // const msg = { "message" : "is this working?" };
    // axios.post(api, msg)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    

    //const login_function_url = "https://bwew0obssh.execute-api.us-west-2.amazonaws.com/default/Add_MSG";
              
    //fetch(login_function_url, requestOptions).then(response => response.text());


   

    const login_function_url = "https://bwew0obssh.execute-api.us-west-2.amazonaws.com/default";
        

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    
    fetch(login_function_url, requestOptions)
    .then(response => response.text()).catch(error => console.log('error', error)); 
    


    // const AddUser = `mutation createClassOf2023Chat($email: String!, $preferred_name: String!, $time: String!, $message: String!) {
    //     createClassOf2023Chat(email: $email, preferred_name: $preferred_name, time: $time, message: $message) {
    //         message
    //     }
    // }`;

    // const details = {
    //     email: {"S" : user_email},
    //     preferred_name: preferred_name,
    //     time: time,
    //     message: raw
    // };

    // const post_body = {
    //     query: AddUser,
    //     operationName: 'createClassOf2023Chat',
    //     variables: details
    // };
    // console.log(`Posting: ${JSON.stringify(post_body, null, 2)}`);


    //  const headers = {
    //      'Content-Type' : 'application/graphq',
    //      'x-api-key' : 'da2-pkmp2vxojvholmpo6nk5tfbnxa'
    //    }
      

    //    axios.post('https://oyph3npr7feotdzs5u2fa4ikoa.appsync-api.us-west-2.amazonaws.com/graphql', JSON.stringify(post_body), {
    //     headers: headers
    //     });





    //  const AddMsg = 
    //  JSON.stringify({ "query": `mutation MyMutation { createClassOf2023Chats(input: {email: ${user_email} , 
    //     message: ${raw}, preferred_name: ${preferred_name}, time: ${time} } ) 
    //  {  email }  }`}) 

        
        


    // now get basic array of all users in coversation 1
    //var json = JSON.parse(JSON.stringify(all_users));
    
    // var all_the_users = json.users.toString();
     //var final = all_the_users.substr(1,all_the_users.length-2);

     //var myArray = final.split(",");
     //console.log(myArray); 

    }

return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          CC Class of 2023
          <Typography component="h1" variant="h5">
          ※CollegeConnect※
          </Typography>
              <div>
                      <h2>
                      random
                      </h2>
              
              </div>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 50 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Message"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
            <a href="/" class="active">Back to Sign In Page</a>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>













);


}
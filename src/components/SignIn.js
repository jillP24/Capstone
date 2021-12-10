import * as React from 'react';
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
import { render } from 'react-dom';
import CasClient, { constant } from "react-cas-client";
let casEndpoint = "cas.coloradocollege.edu";
let casOptions = { version: constant.CAS_VERSION_2_0};
let casClient = new CasClient(casEndpoint, casOptions);



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        CollegeConnect
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const email = data.get('email')
    //const password = data.get('password')

    //  JSON.parse(result).body

    if(email.includes("coloradocollege")) {
                  // Basic usage
            casClient
              .auth()
              .then(alert("Authentication done"))
              .then(successRes => {
                console.log(successRes);
                alert(successRes.user);
                
                // Login user in state / locationStorage ()
                // eg. loginUser(response.user);

                // If proxy_callback_url is set, handle pgtpgtIou with Proxy Application

                // Update current path to trim any extra params in url
                // eg. this.props.history.replace(response.currentPath);
              })
      
              .catch(errorRes => {
                console.error(errorRes);
                // Error handling
                // displayErrorByType(errorRes.type)

                // Update current path to trim any extra params in url
                // eg. this.props.history.replace(response.currentPath);
  });
      
    }
    
else {
    // alert is working but the text field is not changing in response to the error
    alert("Error: Colorado College email required.");
    <TextField
    error
    id="outlined-error-helper-text"
    label="Error"
    defaultValue=""
    helperText="Colorado College email required."
  />
}

  };

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
          Sign in
          <Typography component="h1" variant="h5">
          CollegeConnect
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
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
              Sign In
            </Button>
            <a href="home" class="active">Skip Ahead to Home Page</a>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}


import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports.js';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';


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

Amplify.configure(awsExports);

const theme = createTheme();

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  // eslint-disable-next-line no-console
  const msg = data.get('email')
}

function App({ signOut, user }) {
  
  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
    
        <Box
          sx={{
            marginTop: -1,     
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'Center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          Message Log
          <Typography component="h1" variant="h5">
          ※ CollegeConnect ※
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 50 }}>
               
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Send Message"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              width = "200px"
              position= "absolute"
              variant="contained"
              
              sx={{ mt: 0, mb: 0, "float": "right" }}
            >
              Send
            </Button>
            <button onClick={signOut}>Sign out</button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );

}

export default withAuthenticator(App);